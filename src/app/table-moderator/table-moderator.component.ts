import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-table-moderator',
  templateUrl: './table-moderator.component.html',
  styles: [
  ]
})
export class TableModeratorComponent implements OnInit {
 form: any = {};
 to :any;

  isSuccessful = false;
  isSignUpFailed = false;
   message = '';
 errorMessage = '';
 //form: FormGroup;

  modalRef: BsModalRef;
  list:any = {};
  currentUser:any;
  editUser : any;
  users : any[] ;
  modeldelete: BsModalRef;
 // id ={'id':''};

 currentModerators= null;
  angForm: FormGroup;
 
  constructor(private tokenStorageService: TokenStorageService,
    public userService: UserService,
    private route : ActivatedRoute,
    private modalService: BsModalService,private router: Router,
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder) { this.createForm();}

  ngOnInit(): void {

  this.currentModerators= this.userService.getModerators();
   this.getModerator(this.route.snapshot.paramMap.get('id'));
   this.currentUser = this.tokenStorageService.getUser();
   this.message='';
  
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  onSubmit(): void {
    this.userService.create(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.modalRef.hide();
        window.location.reload();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  openModaledit(template: TemplateRef<any>,users){
    this.modalRef = this.modalService.show(template);
    this.editUser=users;
  
  
    console.log(this.editUser)
  }

  getModerator(id)
  {
    this.userService.get(id)
    .subscribe(
      data => {
        this.currentModerators = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
 /* onUpdate()
  {
  
    this.userService.updateModerator(this.currentModerators.id,this.currentModerators).subscribe(response =>
      {
        console.log(response);
        this.message = "User was updated successfully!";
      this.modalRef.hide();
      },error =>{console.log(error);
      });
  }*/
 openModaldelete(template: TemplateRef<any>){
  //  this.users=users;
    this.modeldelete = this.modalService.show(template);
    
  }
  openModaladd(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

 deleteUser(id) {
  this.userService.deleteModerator(id)
    .subscribe(
      response => {
        console.log(response);
        this.modeldelete.hide();
        window.location.reload();

      },
      error => {
        console.log(error);
      });
    }
  updateUser(id,users){
     /* const UserData = {
      id: this.currentModerator.id,
      username: this.currentModerator.username,
      email: this.currentModerators.email,
      pays: this.currentModerators.id,
      ville: this.currentModerators.id,
      nomModule:this.currentModerators.id,
    };*/
    this.userService.updateModerator(id,users)
    .subscribe(
      response => {
        console.log(response);
       // window.location.reload();
       this.modalRef.hide();

      },
      error => {
        console.log(error);
      });
    }
    openModalmail(template: TemplateRef<any>){
      //  this.users=users;
        this.modalRef = this.modalService.show(template);
        
      }
      sendMail( subject,text) {
        let email = this.userService.getModerators1().subscribe((data)=>{
         // let j=+1;
          for(var i=0;i<data.length;i++)          
          {    
            console.log(data[i]["email"]);
            this.list=data[i]["email"];
            this.to=this.list;
         
        this.userService.sendEmail(this.to,subject,text).subscribe((success) => {
          this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
          console.log(success);
        }, error => {
          this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
      } 
    })
      }
      sendUnMail( to,subject,text) {
        this.userService.sendEmail(to,subject,text).subscribe((success) => {
          this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
          console.log(success);
        }, error => {
          this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
    
    };
    createForm() {
      this.angForm = this.fb.group({
       // to: ['', Validators.required],
        subject: ['', Validators.required],
        text: ['', Validators.required],
      });
     
    }
}
  
  



  