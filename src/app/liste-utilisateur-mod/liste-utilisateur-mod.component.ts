import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-liste-utilisateur-mod',
  templateUrl: './liste-utilisateur-mod.component.html',
  styleUrls: ['./liste-utilisateur-mod.component.css']
})
export class ListeUtilisateurModComponent implements OnInit {
  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService, public userService: UserService ){ }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.userService.getUsers();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

