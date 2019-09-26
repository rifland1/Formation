import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;
  isLoggedIn = false;
  private url: string;
  public username: String;
  public password: String;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }


  login (credentials: any) {
    let headers = new HttpHeaders({ 
          'Authorization': 'Basic ' + btoa(credentials.username + ':' + credentials.password),
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
    });

    let options = { 
           headers: headers 
    };

    return this
              .http
              .post(this.url + 'login', credentials, options)
              .subscribe(res => console.log(res));
}
}

