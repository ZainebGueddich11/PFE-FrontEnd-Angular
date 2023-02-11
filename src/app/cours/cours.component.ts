import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styles: [
  ]
})
export class CoursComponent implements OnInit {
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
