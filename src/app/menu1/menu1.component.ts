import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styles: [
  ]
})
export class Menu1Component implements OnInit {
  content: string;
  currentUser:any;
  constructor(private  userService: UserService, private tokenStorageService: TokenStorageService) { }
  
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.tokenStorageService.getUser();


  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
  test()
  {
    console.log("hhhhhhhhhhh")
  }
}
