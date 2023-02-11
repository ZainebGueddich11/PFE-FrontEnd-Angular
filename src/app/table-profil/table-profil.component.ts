import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-table-profil',
  templateUrl: './table-profil.component.html',
  styles: [
  ]
})
export class TableProfilComponent implements OnInit {
  currentUser: any;
  modalRef: BsModalRef;
  modalRef1: BsModalRef;
  modalRef2: BsModalRef;
  modeldelete: BsModalRef;
  editUser : any;
  to :any;
  list:any = {};
  angForm:FormGroup;
  ide:any;
  constructor(private tokenStorageService: TokenStorageService,
    public userService: UserService , private route : ActivatedRoute,
    private modalService: BsModalService,private router: Router,
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder)
    {this.createForm(); }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.userService.getUsers();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  openModaldelete(template: TemplateRef<any>){
    //  this.users=users;
      this.modeldelete = this.modalService.show(template);
      
    }
    openModaledit(template: TemplateRef<any>,users){
      this.modalRef = this.modalService.show(template);
      this.editUser=users;
    
    
      console.log(this.editUser)
    }
  
    deleteUser(ide) {
      this.userService.deleteModerator(ide)
        .subscribe(
          (response) => {
            console.log(response);
            this.modeldelete.hide();
             window.location.reload();
    
          },
          error => {
            console.log(error);
          });
        }
      updateUser(id,users){
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
        sendMail( subject,text) {
          let email = this.userService.getUsers1().subscribe((data)=>{
           // let j=+1;
            for(var i=0;i<data.length;i++)          
            {    
              console.log(data[i]["email"]);
              this.list=data[i]["email"];
              this.to=this.list;
           
          this.userService.sendEmail(this.to,subject,text).subscribe((success) => {
            this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
            console.log(success);
            this.modalRef2.hide();
          }, error => {
            this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          });
        } 
      })
        }
        sendUnMail( to,subject,text) {
          this.userService.sendEmail(to,subject,text).subscribe((success) => {
            console.log("hh")
            this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
            console.log(success);
            console.log("hh")
            this.modalRef1.hide();
          }, error => {
            this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
          });
      
      };
        

        openModalmail(template: TemplateRef<any>){
          //  this.users=users;
            this.modalRef2 = this.modalService.show(template);
            
          }
          createForm() {
            this.angForm = this.fb.group({
             // to: ['', Validators.required],
              subject: ['', Validators.required],
              text: ['', Validators.required],
            });
           
          }
          openModalUnMail(template: TemplateRef<any>){
            //  this.users=users;
              this.modalRef1 = this.modalService.show(template);
              
            }
      
}
