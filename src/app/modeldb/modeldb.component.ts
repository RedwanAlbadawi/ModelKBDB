import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modeldb',
  templateUrl: './modeldb.component.html',
  styleUrls: ['./modeldb.component.css']
})
export class ModeldbComponent implements OnInit {

  selectedFile: File = null;
  bucketname: string;
  filename: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    const fd = new FormData()
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('/api/upload', fd)
      .subscribe(res => {
        console.log(res);
      });
  }

  test() {
    this.http.get('/api/collection/CNN011019-220728/85b72d77980fac75b8a7ca5f6a234cdd.jpg')
      .subscribe(res => {
        console.log(res);
      });
  }

}
