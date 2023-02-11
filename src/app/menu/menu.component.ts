import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArcElement, Chart, PieController } from 'chart.js';
import { ExamService } from '../_services/exam.service';
import { OpinionService } from '../_services/opinion.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  
  content: string;
  currentUser: any;
  message = '';
  nombre: number;
  nombre1: number;
  nbusercertif:any;
  //currentUsers =null;
  users:[];
  success:any;
  failed:any;
  successpourcentage: any;
  failedpourcentage:any;
  list={};
  constructor(public userService: UserService, private tokenStorageService: TokenStorageService,
    private route : ActivatedRoute,private exam : ExamService,private opinionService :  OpinionService) { }

  ngOnInit(): void {
    this.getOpinion();
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.tokenStorageService.getUser();
    this.getUsers(this.route.snapshot.paramMap.get('id'));
    this.nombreUser();
    this.nombreModerator();
    this.exam.getnombreusercertif().subscribe((data)=>{
      console.log(data);
      this.nbusercertif=data.length;
      console.log(this.nbusercertif)
    
    this.exam.countuserfailed().subscribe((data)=>{
      console.log(data);
      this.failed=data[0]["userFailedCount"];
      console.log(this.failed);
      this.failedpourcentage=Math.round(this.failed*100/this.nbusercertif);

      this.exam.countusersuccess().subscribe((data)=>{
        console.log(data);
        this.success=data[0]["userSuccessCount"];
        console.log(this.success);
        this.successpourcentage=Math.round(this.success*100/this.nbusercertif);
        console.log(this.successpourcentage);
   

      
   

  
    const canvas = <HTMLCanvasElement> document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
    Chart.register(PieController,ArcElement);
    let myChart = new Chart(ctx,{
    
      type:'pie',
      data: {
        datasets : [
          {
            data : [this.success,this.failed],
            backgroundColor:['#dd3b79', '#2adece'],
            borderWidth:1
          }
        ]
    
      }

    
    });
   
    



  });
  });
    
});





  }

  getOpinion()
  {
    this.opinionService.getOpinion().subscribe(data=>{
      console.log(data);
      this.list=data;
    })
  }
  logout(): void {
    this.tokenStorageService.signOut();
   window.location.reload();
  }
  getUsers(id)
  {
    this.userService.get(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
    nombreUser(){
      this.userService.getUsers1().subscribe(
        data=>{
          this.users=data;
          this.nombre=this.users.length;
        }
      );
    }
    nombreModerator(){
      this.userService.getModerators1().subscribe(
        data=>{
          this.users=data;
          this.nombre1=this.users.length;
        }
      );
    }

     
 
   
 
}
