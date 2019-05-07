import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modeldb',
  templateUrl: './modeldb.component.html',
  styleUrls: ['./modeldb.component.css']
})
export class ModeldbComponent implements OnInit {

  filesToUpload: Array<File> = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onFileSelected(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  onUpload() {
    const fd = new FormData()
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
      fd.append('uploads[]', files[i], files[i]['name']);
    }
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
