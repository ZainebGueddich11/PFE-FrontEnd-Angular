import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { BadgeService } from '../_services/badge.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-create-badge',
  templateUrl: './create-badge.component.html',
  styles: [
  ]
})
export class CreateBadgeComponent implements OnInit {
  form: any = {};
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message ='';
  fileInfos?: Observable<any>;
  showFile = false;
  fileUploads: Observable<any>;
  @Input()  fileUpload: string;
 modalRef: BsModalRef;
 modeldelete: BsModalRef;
 currentUser:any;

  constructor(private badgeService: BadgeService,
     private tokenStorageService: TokenStorageService,
    
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
    //cours1
    upload1(): void {
      this.progress = 0;
   
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
    
        if (file) {
          this.currentFile = file;
    
          this.badgeService.CreateBadge1(this.currentFile,this.form).subscribe(
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
    showFiles1(enable: boolean) {
      this.showFile = enable;
  
      if (enable) {
        this.fileUploads = this.badgeService.getBadge();
      }
    }
    openModaldelete(template: TemplateRef<any>){
      //  this.users=users;
        this.modeldelete = this.modalService.show(template);
        
      }
      deleteBadge(id) {
        this.badgeService.deleteBadge(id)
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
}
