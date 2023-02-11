import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Examen } from '../models/exemen';
import { Lista } from '../models/lista';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list : Examen[] = []
liste : any;
name1:any=[];
note1:any=[];
nbquestion1:any=[];
module1:any=[];
name1l:any;
t:any;
modalRef: BsModalRef;
currentUser :any;

  constructor(private modalService: BsModalService,
    private exam_serv : ExamService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {

    this.exam_serv.listExamen1liste().subscribe(data => {
      this.liste=data;
      console.log(this.liste)

 
    
    this.currentUser = this.tokenStorageService.getUser();



   
      

      

    })
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  openModaldelete(template: TemplateRef<any>){
    //  this.users=users;
      this.modalRef = this.modalService.show(template);
      
    }
    deleteUser(id) {
      
      this.exam_serv.deleteExamen(id)
        .subscribe(
          response => {
            console.log(response);
            this.modalRef.hide();
//      window.location.reload();
    
          },
          error => {
            console.log(error);
          });
        }
}
