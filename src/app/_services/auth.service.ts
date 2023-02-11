import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public roles:string[];
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password,
      
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      pays: user.pays,
      ville: user.ville
    }, httpOptions);
  }
  getUsers() {

    return this.http.get("http://localhost:8080/login/getAll" )
  }
  getUserName() {
    return this.http.get("http://localhost:8080/"+'users/username', {
      observe: 'body',
      params: new HttpParams().append('auth-user', sessionStorage.getItem('auth-user'))
    });
  }
  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return (this.roles.indexOf('ADMIN') >-1);
   
  }
}
