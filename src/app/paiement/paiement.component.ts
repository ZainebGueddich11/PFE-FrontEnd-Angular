import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styles: [
  ]
})
export class PaiementComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;
  form:any={};
  idUser:any;
  idExam :any;
  isSuccessful=false;
  constructor(private fb: FormBuilder, private stripeService: StripeService,private http : HttpClient,private router: Router,private exam_serv : ExamService, private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.idUser= this.tokenStorageService.getUser();
    this.exam_serv.getexamencertifId().subscribe(data=>{
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
  }
  
  
  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe(obj => {
          if (obj){
            console.log("token is =>",obj.token.id);
            this.http.post("http://localhost:8080/payme",{
              token: obj.token.id

            })
            .subscribe((res)=>{
              console.log("the response from server is ",res);
              console.log("paiement done");
              this.isSuccessful=true;

            },
              (err)=>{
                console.log("the error is ",err)
              }
              )
              
          }
          else{
             // Error creating the token
          console.log("error comes");
          }
          // Use the token
       
      });
  }
  examcertif(){
    this.exam_serv.getexamencertif().subscribe(data => {
  
      let x:any=[];
      console.log(data);
      x=data;
     console.log(x[0]["examen"]["id"]);
      let z=x[0]["examen"]["id"];

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
 
}
