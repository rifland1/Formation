import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authenticated = false;
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  authenticate(credentials, callback) {
    
    return this.http.post(this.url + 'login', credentials);

    }
  


}