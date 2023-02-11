import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursService } from 'src/app/_services/cours.service';
import { ExamService } from 'src/app/_services/exam.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-module5user',
  templateUrl: './module5user.component.html',
  styles: [
  ]
})
export class Module5userComponent implements OnInit {
  content: string;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message ='';
  fileInfos?: Observable<any>;
  showFile1 = false;
  showFile2 = false;
  showFile3 = false;
  showFile4 = false;
  showFile5 = false;
  fileUploads1: Observable<any>;
  fileUploads2: Observable<any>;
  fileUploads3: Observable<any>;
  fileUploads4: Observable<any>;
  fileUploads5: Observable<any>;
  @Input()  fileUpload: string;
  idUser:any;
  idExam :any;
 
  active:any;
  enable=false;
  dateExamen;
  jstoday = '';
  myDate = Date.now()
  trouver=false;

  form:any={};
  constructor(private router: Router,private exam_serv : ExamService,private userService: UserService, private tokenStorageService: TokenStorageService,private coursService: CoursService) {
    this.message="";
   }
  
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

    this.idUser= this.tokenStorageService.getUser();
    this.exam_serv.getexamenm5Id().subscribe(data=>{
      let x:any=[]
     // console.log(data)
      for(var i=0;i<data.length;i++)
      {
        x=data[i]["examenId"];
        
      }
      this.idExam=x;
      //this.idUser= this.tokenStorageService.getUser()
     // console.log(this.idUser["id"]);

     });
     this.Active();
     this.Enable();
  }

  Enable()
{
  this.exam_serv.getexamenm5Id().subscribe(data=>{
    for(var i=0;i<data.length;i++)
    {
      console.log(data);
      this.dateExamen=data[i]["examen"]["dateExamen"];
      console.log( this.dateExamen);
      this.jstoday = formatDate(this.myDate, 'yyyy-MM-dd', 'en-TT');  
      console.log(this.jstoday);
      if(this.dateExamen==this.jstoday)
      {
        this.trouver=true;
        console.log("hh")
      }else {
        this.trouver=false;
        console.log("faux")
      } 
    }
   });
}

   Active() {

    this.exam_serv.getUserExamenactifM5(this.idUser["id"]).subscribe(data=>{
      console.log(data);
      console.log(data[0]["actif"]);
      this.active=data[0]["actif"];
      
      this.enable=true ;
      console.log(this.enable);     
   
   });
   }

  examM5(){
    this.exam_serv.getexamenm5().subscribe(data => {
  
      let x:any=[]
      console.log(x=data);
     // console.log(x["examen"]["id"]);
      let z=x["examen"]["id"];

      this.router.navigate(["/examen/"+z]);
      this.form={
        "examenId":parseInt(this.idExam),
        "userId":parseInt(this.idUser["id"]),
        "actif":true
      }
     
      this.exam_serv.createUserExamen(this.form).subscribe(data=>{
       console.log(data);
     }) 
    })
   }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
  
  showFiles1(enable: boolean) {
    this.showFile1 = enable;

    if (enable) {
      this.fileUploads1 = this.coursService.getFilesCours5S1();
    }
  }
  //cours2
  
  showFiles2(enable: boolean) {
    this.showFile2 = enable;

    if (enable) {
      this.fileUploads2 = this.coursService.getFilesCours5S2();
    }
  }
  //cours3
  
  showFiles3(enable: boolean) {
    this.showFile3 = enable;

    if (enable) {
      this.fileUploads3 = this.coursService.getFilesCours5S3();
    }
  }
  
    //cours4
   
    showFiles4(enable: boolean) {
      this.showFile4 = enable;
  
      if (enable) {
        this.fileUploads4 = this.coursService.getFilesCours5S4();
      }
    }
        //cours5
       
        showFiles5(enable: boolean) {
          this.showFile5 = enable;
      
          if (enable) {
            this.fileUploads5 = this.coursService.getFilesCours5S5();
          }
        }
  

}
