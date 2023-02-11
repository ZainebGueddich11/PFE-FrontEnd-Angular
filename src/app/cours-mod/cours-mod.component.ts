import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-cours-mod',
  templateUrl: './cours-mod.component.html',
  styleUrls: ['./cours-mod.component.css']
})
export class CoursModComponent implements OnInit {
  currentUser:any;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();

  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
