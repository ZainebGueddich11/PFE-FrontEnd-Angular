import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BadgeService } from '../_services/badge.service';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styles: [
  ]
})
export class BadgesComponent implements OnInit {
  isSuccessful=false;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message ='';
  fileInfos?: Observable<any>;
  showFile = false;
  fileUploads: Observable<any>;
  note:number=0;
  idUser:any;
  bareme:number=0
  myDate = Date.now()
 constructor( private tokenStorageService: TokenStorageService, private badgeService: BadgeService, private exam : ExamService ) { }
  ngOnInit(): void {
  
    this.fileUploads = this.badgeService.getBadge();
    // else{
       //console.log("hhhh")
     //}
     this.idUser= this.tokenStorageService.getUser();
     console.log(this.idUser)
     this.exam.getUserExamenExamenId(this.idUser["id"]).subscribe((data)=>{
       console.log(data);  
       if(data.length==5)
     {  for(var i=0;i<data.length;i++)
       {
         if((data[i]["examen"])!=null)
         {
           this.note +=(data[i]["note"]);
         }
        
       } 
       console.log(this.note)
 
       this.exam.getexamenModule().subscribe((data)=>{
         console.log(data);
         if(data.length==5)
       {  for(var j=0;j<data.length;j++)
         {
           console.log(data[j]["note"])
           this.bareme+=parseInt(data[j]["note"])
           
         }console.log((this.bareme));
         let moy=(this.bareme*70)/100;
         console.log(moy)
       if( this.note>=moy)
       {
         console.log("hhh")
         this.isSuccessful=true;
         this.badgeService.getBadge();
       }
     }
       })
   } })
  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }

 uploadbadge(): void {
    this.progress = 0;
 
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.currentFile = file;
  
        this.badgeService.CreateBadge(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.badgeService.getBadge();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else { this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }
  }}



}
