import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';
@Component({
  selector: 'app-examencertif',
  templateUrl: './examencertif.component.html',
  styles: [
  ]
})
export class ExamencertifComponent implements OnInit {
  myDate = Date.now()

  title = ' PFE';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel= NgxQrcodeErrorCorrectionLevels.HIGH;
  value = "QHSE00";
  User:any;
  
  ok=false;
  name:any;
  idUser:any;
 // @ViewChild('container') container: ElementRef;
  constructor( private exam : ExamService , private tokenStorageService: TokenStorageService) {    
  }

  ngOnInit() {
    this.User=this.tokenStorageService.getUser();
    this.idUser=this.User["id"];
    this.exam.certif(this.idUser).subscribe((data)=>{
        console.log(data);
        
        if(data[0]["success"]=true)
        {
          console.log("aaa")
        this.ok=true ; 
        this.name=this.User["username"];  
        this.value+=this.idUser;
       //this.generatePDF();
      

      }
    }
    );


}
/*pdf(){
  let doc=new jsPDF();
  let sepecialElementHandlers ={
    '#ediors': function(element, renderer)
    {
      return true;
    }

  };
  let container =this.container.nativeElement;
  doc.fromHTML(container.innerHTML, 15, 15, {
    'width': 190,
    'elementHandlers':sepecialElementHandlers
  });
  doc.save('certificat.pdf');
}*/


generatePDF() {
  var data = document.getElementById('container');
  html2canvas(data).then(canvas => {
    var imgWidth = 280;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    //var imgHeight = 200;
    const contentDataURL = canvas.toDataURL('image/png')
    //let pdf = new jspdf('l', 'mm', 'a4');
    let pdf = new jspdf('l', 'mm', [canvas.width,canvas.height]);
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, canvas.width,canvas.height)
    pdf.save('newPDF.pdf');
    

  });

}




}


