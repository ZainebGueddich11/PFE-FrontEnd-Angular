import { Component, OnInit } from '@angular/core';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styles: [
  ]
})
export class NotesComponent implements OnInit {
  idUser: any;
notes:any;
  constructor(  private tokenStorageService: TokenStorageService, private exam : ExamService) { }

  ngOnInit(): void {
    this.idUser= this.tokenStorageService.getUser();
    this.exam.getUserExamenNomExamen(this.idUser["id"]).subscribe((data)=>{
      this.notes=data 
      console.log(this.notes); 

      })
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
