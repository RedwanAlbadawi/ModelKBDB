const express = require('express');
const router = express.Router();
const GridFsStorage = require('multer-gridfs-storage');
const multer = require('multer');

const mongoURI = 'mongodb+srv://modelkb:modelkb@modelkb-0dva5.gcp.mongodb.net/uploads?retryWrites=true';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
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

router.post('/upload', upload.single('file'),(req, res)=> {
  console.log(req.file.originalname.substr(0, req.file.originalname.indexOf('-')));
});

module.exports = router;
