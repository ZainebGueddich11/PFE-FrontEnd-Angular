import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  constructor(private _http : HttpClient) { }
  CreateBadge(file: File): Observable<any>{
    const formData: FormData = new FormData();
   
     formData.append('file', file);
   
     const req = new HttpRequest('POST', API_URL+'CreateBadge', formData, {
       reportProgress: true,
       responseType: 'json'
     });
   
     return this._http.request(req);
   }
   getBadge(): Observable<any> {
    return this._http.get('http://localhost:8080/getBadge');
  }
  CreateBadge1(file: File,badge:any): Observable<any>{
    const formData: FormData = new FormData();
   
     formData.append('file', file);
     formData.append('description', badge.description);
     const req = new HttpRequest('POST', API_URL+'CreateBadge', formData, {
       reportProgress: true,
       responseType: 'json',
    
      
    })
   
     return this._http.request(req);
   }
   deleteBadge(id): Observable<any> {
    return this._http.delete(API_URL+id+'/deletebadge',{ responseType: 'text' });
   
   }
}