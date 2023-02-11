import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-generalites',
  templateUrl: './generalites.component.html',
  styles: [
  ]
})
export class GeneralitesComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
