
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { CoursService } from 'src/app/_services/cours.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-m1-s5-d',
  templateUrl: './m1-s5-d.component.html',
  styles: [
  ]
})
export class M1S5DComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  form: any = {};
  progress = 0;
  message ='';
  fileInfos?: Observable<any>;
  showFile = false;
  fileUploads: Observable<any>;
  @Input()  fileUpload: string;
  modalRef: BsModalRef;
  currentUser :any;
  constructor(private userService: UserService,
     private tokenStorageService: TokenStorageService,
     private coursService: CoursService,
     private modalService: BsModalService,) { }
 
  ngOnInit(): void {
    this.message='';
    this.currentUser = this.tokenStorageService.getUser();


  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
 

    //cours5
    upload5(): void {
      this.progress = 0;
   
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
    
        if (file) {
          this.currentFile = file;
    
          this.coursService.uploadCours1S5(this.currentFile,this.form).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.coursService.getFilesCours1S5();
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
    showFiles5(enable: boolean) {
      this.showFile = enable;
  
      if (enable) {
        this.fileUploads = this.coursService.getFilesCours1S5();
      }
    }
    openModaldelete(template: TemplateRef<any>){
      //  this.users=users;
        this.modalRef = this.modalService.show(template);
        
      }
    deleteCours(id) {
      this.coursService.deleteCOURS(id)
        .subscribe(
          response => {
            console.log(response);
            this.modalRef.hide();
            window.location.reload();
    
          },
          error => {
            console.log(error);
          });
        }

}


