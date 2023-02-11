import { Component, OnInit } from '@angular/core';
import { OpinionService } from '../_services/opinion.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  form:any={};
  question1;
  question2;
  question3;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  idUser: any;
  constructor(private opinionService: OpinionService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
 

  }
  onSubmit(): void {
    this.idUser= this.tokenStorageService.getUser();
    this.form={
      "question1":this.question1,
      "question2":this.question2,
      "question3":this.question3,
      "userId":this.idUser["id"]
    }
    this.opinionService.createOpinion(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
  
}
