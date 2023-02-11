import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styles: [
  ]
})
export class CertificationsComponent implements OnInit {
  title = ' PFE';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel= NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "QHSE";
  idUser:any;
  active:any;
  enable=false;
  dateExamen;
  jstoday = '';
  myDate = Date.now()
  trouver=false;
  hidden;
  passerModule=false;
  constructor(private tokenStorageService: TokenStorageService,private exam_serv : ExamService,) { }

  ngOnInit(): void {
    this.idUser= this.tokenStorageService.getUser();


this.hidden=true

    
    this.Active();
    this.Enable();
    this.Modules();


  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  open()
  {

    window.open("http://localhost:4200/paiement",'_blank','location=yes,height=570,widhth=520,scrollbars=yes,status=yes');
  
  }

  Active() {

    this.exam_serv.certif(this.idUser["id"]).subscribe(data=>{
      console.log(data);
      console.log(data[0]["actif"]);
      this.active=data[0]["actif"];
      
      this.enable=true ;
      console.log(this.enable);     
   
   });
   }

  Enable()
{
  this.exam_serv.getexamencertifId().subscribe(data=>{
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
  
Modules(){
  this.exam_serv.getUserexamenModule(this.idUser["id"]).subscribe(data=>{
    console.log(data)
    if(data.length==5){
      console.log(this.idUser["id"])
      console.log(data)
      this.passerModule=true;
    }
  })
}



  

  
}
