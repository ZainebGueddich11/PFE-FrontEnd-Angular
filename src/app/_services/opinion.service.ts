import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(private _http : HttpClient) { }
    createOpinion(data:any): Observable<any>
  {
    return this._http.post( "http://localhost:8080/createOpinion",data);
  }
  getOpinion(): Observable<any>
  {
    return this._http.get( " http://localhost:8080/getOpinion");
  }
}
