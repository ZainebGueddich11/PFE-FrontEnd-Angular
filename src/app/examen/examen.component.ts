import { Component, OnInit, TemplateRef } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Examen } from '../models/exemen';
import { Questionschemas } from '../models/questionschemas';
import { ExamService } from '../_services/exam.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  isLinear = false;
  formGroup !: FormGroup ;
  form !: FormArray ;
  form2 !: FormArray ;
  modalRef: BsModalRef;
  model: BsModalRef;
  answercount=0;
  answercorrect:any;
  examen !: Examen;
  arr = [];
  score=0;
  z:any;
  isSuccessful = false;
  list:any={};
  list2:any={};
  list3:any={};
  id1:any;
  idUser:any;
  idExam :any;
  note=0;
  timeLeft;
  isSuccessful1 = false;
  isSuccessful2 = false;
  success=false;
interval;
@ViewChild('timee')  timee:any;
  notecertif: number=0;
  certif: string;
  constructor(private _formBuilder: FormBuilder , 
    private exam : ExamService , 
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private router: Router, private tokenStorageService: TokenStorageService) {    
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      form : this._formBuilder.array([]),

      


    }) 

    this.addItem()
   this.startTimer();
  
   
  }

  init(){
    return this._formBuilder.group({
      answer :new FormControl('', [Validators.required]),
    })
  }
  startTimer() {
    let id = this.route.snapshot.paramMap.get("id");
    this.exam.getexam(id).subscribe( (data ) => {
      console.log(data["duration"])
      this.timeLeft=data["duration"];
  
    this.interval = setInterval(() => {
     if(this.timeLeft > 0) {
        this.timeLeft--;
      }else
        {
          this.isSuccessful1 = true;
          this.submitscore();
          clearInterval(this.interval);
          this.model=this.modalService.show(this.timee);

        }
      
    
    },1000*60)  })
  }

 
  
   addItem(){
      this.form = this.formGroup.get('form') as FormArray;
    
      let id = this.route.snapshot.paramMap.get("id")
      this.exam.getexam(id).subscribe( (data :Examen) => {
      
      this.examen = data  

      console.log(data)
      //console.log(data.moduleQHSE)
      let questionschemas  = data.questionschemas
      for (let d of questionschemas) {
       this.form.push(this.init())

      }
     
    })

  }

  getArrayControls() {
    return (<FormArray>this.formGroup.get('form')).controls;
  }

  onSubmit() {

    console.log(this.formGroup.value)
  }
  openModaldelete(template: TemplateRef<any>){
    //  this.users=users;
      this.modalRef = this.modalService.show(template);
      this.submitscore();
      clearInterval(this.interval)
      
    }
  submitscore(){
      this.form = this.formGroup.get('form') as FormArray;
      let id = this.route.snapshot.paramMap.get("id")
      this.exam.getexam(id).subscribe( (data :Examen) => {
  
      this.examen = data  
      let x:any=[];
      x =this.formGroup.value;
      
    for(var i=0;i<data.questionschemas.length;i++)
    {
      if( data.questionschemas[i].answer==x["form"][i]["answer"])
        {
          this.score=this.score+data.questionschemas[i].noteQuestion;

        } 
       
      }
 
    
   this.list=
   { 
     
    "note":(this.score),
   }     
  let id = this.route.snapshot.paramMap.get("id")
      this.exam.getexam(id).subscribe( (data :Examen) => {
      
      this.examen = data  

      console.log(data)
      console.log(data["id"]);
     this.idExam=(data["id"]);
     
     console.log(data["note"])
     this.note=data["note"]
     
    })
   this.idUser= this.tokenStorageService.getUser();
   
  
  this.exam.getUserExamen().subscribe((data)=>{
  
    let i=0;
    console.log(data);
    
    console.log(data[i]["examenId"]);
   let i2=data.length-1;
   console.log(i2);
   console.log(data[i2]["id"])
    this.id1=parseInt((data[i2]["id"]));
    console.log(this.id1)
      if( (data[i]["userId"]=parseInt(this.idUser["id"])) && ( (data[i]["examenId"]) =this.idExam   ))
     { 
    
      console.log(this.id1)
    
     this.exam.createNote(this.id1,this.list).subscribe((data)=>{
     console.log( data =this.score )
     this.isSuccessful = true;
     
    
     })   
     
    }else{
      i++;
    }
    console.log(data);
     let k=data.length-1;
     let n=parseInt((data[k]["id"]));
     
    {
      //console.log(data[k]["examen"]["moduleQHSEs"][0]["name"]);
      if(data[k]["examen"]["moduleQHSEs"][0]["name"]===("Examen de certification"))
      {
        console.log("hh");
         if (this.score>=((this.note*70)/100))
         {
          this.list2=
          { 
            
           "success":true,
          }     
       //this.success="bravo vous avez un certificat";
          this.success=true;
          
       this.exam.createNote(n,this.list2).subscribe((data)=>{
        console.log( data )       
        })   

         }
         else
         {
          this.list3=
          { 
            
           "success":false,
          }   
          this.exam.createNote(n,this.list3).subscribe((data)=>{
            console.log( data )       
            })  
         }
      }
    }

  }); 
    })

  }
 
  retour()
  {
    this.modalRef.hide();
    this.router.navigate(["/menu1"]); 
  }
  retour2()
  {
    this.model.hide();
    this.router.navigate(["/menu1"]); 
  }
  routecertif(){
    this.modalRef.hide();
    this.router.navigate(["/examencertif"]); 
  }
}

function examM1() {
  throw new Error('Function not implemented.');
}


