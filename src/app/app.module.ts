import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import { ModeldbComponent } from './modeldb/modeldb.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCsDkYE3JaFLz0UOB3mOkua-MbNilY9Jx4',
  authDomain: 'modelkb-db.firebaseapp.com',
  databaseURL: 'https://modelkb-db.firebaseio.com',
  projectId: 'modelkb-db',
  storageBucket: 'modelkb-db.appspot.com',
  messagingSenderId: '67869158599'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ModeldbComponent,
    HeaderComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
