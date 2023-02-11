import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Socket } from 'ngx-socket-io';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private socket : Socket , private http : HttpClient,private tokenStorageService :TokenStorageService ) {
    socket.emit('subscribe', {token : sessionStorage.getItem('auth-token')});
  }



     

  listen(eventname: string) : Observable<any> {
      return new Observable((subscriber) => {
          this.socket.on(eventname, (data) => {
              subscriber.next(data);
          })
      })
  }

  emit(eventname: string, data: any , conversation_id :any)  {
      this.socket.emit(eventname, {
          room: conversation_id,
          message: data
      });
  }


  getChat(id) :Observable<any>{
let headers = new HttpHeaders()


headers.set('Authorization' , sessionStorage.getItem("auth-token"))
 //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
return this.http.get("http://localhost:8080/chat/get/" + id)

  }
}
