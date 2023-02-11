import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  content: any;
  currentUser: any;
  nombre: number;
  users:[];
  constructor(private userService: UserService, private tokenStorageService: TokenStorageService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.tokenStorageService.getUser();
    this.getUsers(this.route.snapshot.paramMap.get('id'));
    this.nombreUser();

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
  nombreUser(){
    this.userService.getUsers1().subscribe(
      data=>{
        this.users=data;
        this.nombre=this.users.length;
      }
    );
  }
}

