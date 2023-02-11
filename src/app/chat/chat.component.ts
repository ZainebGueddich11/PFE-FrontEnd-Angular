import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { WebSocketService } from '../_services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;
  users : any []
  currentUser2:any;
error = false ;
  currentUser : any
  Hidden=false;
  showFile2 = false;
  myDate = Date.now();
  jstoday = '';
  constructor(private webSocketService: WebSocketService , private auth : AuthService,private tokenStorageService: TokenStorageService,) { }
  ngOnInit(): void {
    this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data));
    this.webSocketService.listen('error').subscribe((data) => this.errorMessage(data));
    this.auth.getUsers().subscribe( (data : any[]) => {

  this.users = data
  this.currentUser = data[0] ;
  this.currentUser2 = this.tokenStorageService.getUser();

  this.getChat()
    })


  

    
  }

  messageTyping(): void {
    this.webSocketService.emit('typing', this.userName , this.currentUser.id);    
  }

  sendMessage(): void {

    
    this.webSocketService.emit('chat', {
      message: this.message,
      handle: this.userName,
      timestamp :this.myDate 
    } , this.currentUser.id);

    this.output.push(


      {id : null , message : this.message}
    )
    this.message = "";    

      
  }

  updateMessage(data:any) {

    console.log("hey")
    this.feedback = '';
    if(!!!data) return;
      if(data.id_user == this.currentUser.id)
    this.output.push(data);
     else {

    let index =  this.users.findIndex(x => x.id === data.id_user);

   this.users[index].has_message = true ;


   console.log(this.output)
     }
  

    
  }
  errorMessage(data) {

this.error = true
      
  }


  disable_error() {

    this.error = false
  }
  updateFeedback(data: any){

    console.log(data)
    if(data.id_user == this.currentUser.id)
    this.feedback = `${data} is typing a message`;
  }


  changeUser(user) {
      if(user.has_message) user.has_message = false 
  this.currentUser = user
this.feedback = null ;
  this.getChat()
  }



  getChat() {
 
    this.webSocketService.getChat(this.currentUser?.id).subscribe( (data : []) => {
   

      this.output = data


    } , error => {

      console.log(error)
    })
  }
hidden()
{
  this.Hidden=true;
  console.log(this.Hidden);
}
 
showFiles2(enable: boolean) {
  this.showFile2 = enable;

  if (enable) {
    this.Hidden=true;
    console.log(this.showFile2)
  }
}
logout(): void {
  this.tokenStorageService.signOut();
 window.location.reload();
}
}
