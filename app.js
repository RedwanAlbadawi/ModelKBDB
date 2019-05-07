const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

const mongoURI = 'mongodb+srv://modelkb:modelkb@modelkb-0dva5.gcp.mongodb.net/uploads?retryWrites=true';

const conn = mongoose.createConnection(mongoURI);

let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const bucketname = file.originalname.substring(0, file.originalname.lastIndexOf("_"));
        const fileInfo = {
          filename: filename,
          bucketName: bucketname
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

app.post('/api/upload', upload.array("uploads[]", 12),(req, res)=> {
  //console.log(req.name.substr(0, req.name.indexOf('-')));
  res.json({array: req.array});
});

app.get('/api/collection/:bucketName', (req, res) => {
  gfs.collection(req.params.bucketName);
  gfs.files.find().toArray((err, files) => {
    if(!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    return res.json(files);
  });
});

app.get('/api/all', (req, res) => {
  res.json({ Status: "Placeholder for all collections"})
});

app.get('/api/collection/:bucketName/:filename', (req, res) => {
  gfs.collection(req.params.bucketName);
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exist'
      });
    }
    return res.json(file);
  });
});

app.get('/api/image/:bucketName/:filename', (req, res) => {
  gfs.collection(req.params.bucketName);
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exist'
      });
    }
    if(file.contentType === 'image/jpeg' || file.contentType === 'img/png') {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
