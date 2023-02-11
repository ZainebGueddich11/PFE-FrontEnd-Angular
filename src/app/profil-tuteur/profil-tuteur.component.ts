import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profil-tuteur',
  templateUrl: './profil-tuteur.component.html',
  styleUrls: ['./profil-tuteur.component.css']
})
export class ProfilTuteurComponent implements OnInit {

   
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message1 = '';
  item: any;
  isSuccessful = false;
  fileInfos?: Observable<any>;
  currentUser: any;
  message = '';
  //currentUsers =null;
  users: any;
  constructor(
    private tokenStorageService: TokenStorageService ,
     public userService: UserService,
     private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.currentUser = this.tokenStorageService.getUser();
    this.message='';
    this.item = this.userService.getModerators();
    this.getUsers(this.route.snapshot.paramMap.get('id'));
    //this.updateUser();
    this.fileInfos = this.userService.getFiles();
  }
   //upload image 
   selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
 
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  getUsers(id)
  {
    this.userService.get(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateUser(){
    this.userService.update(this.currentUser.id,this.currentUser)
    .subscribe(
     (response)  => {
        console.log(response);
        this.isSuccessful =true ;
        this.tokenStorageService.saveUser(this.currentUser);
        window.location.reload();
      },
      error => {
        console.log(error);
      });
    }
}
