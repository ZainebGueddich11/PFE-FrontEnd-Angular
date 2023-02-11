import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;

  constructor(private userService: UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  
  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
}
