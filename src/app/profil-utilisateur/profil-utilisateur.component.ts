import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styles: [
  ]
})
export class ProfilUtilisateurComponent implements OnInit {
  currentUser: any;
  isSuccessful= false;
  item: any;
  constructor(private tokenStorageService: TokenStorageService,public userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.item = this.userService.getUsers();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
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