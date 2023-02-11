import { formatDate } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,FormArray, AbstractControl} from '@angular/forms';
import { MatStepper, MatStepperNext } from '@angular/material/stepper';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Examen } from '../models/exemen';
import { ExamService } from '../_services/exam.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  styles: [':host ::ng-deep .mat-form-field-underline {display:none;border-bottom: 1px solid red!important}']
})
export class CreateComponent implements OnInit {
  isLinear = false;
  formGroup !: FormGroup ;
 
  form !: FormArray ;
 
  list:any={};
  notegenerale:any;
 
  note:any=0;
  arr = []
  id:any;
  id2:any;
  tab:any;
  t:any
  note1:number=0;
  note2:any;
  submitted = false;
  submitted1=false;
  myDate = Date.now()
  jstoday;
  constructor(private _formBuilder: FormBuilder , 
    private exam : ExamService,
    private router: Router) 
  {  
  }
 
  ngOnInit() {

this.jstoday = formatDate(this.myDate, 'dd/MM/yyyy', 'en-TT');
console.log(this.jstoday);
    this.formGroup = this._formBuilder.group({
      name : new FormControl('', [Validators.required]),
      duration : new FormControl('', [Validators.required,Validators.min(1)]),
      dateExamen : new FormControl('',Validators.compose([Validators.required,this.dateValidator])),
      form : this._formBuilder.array([]),
    


    }) 
    
   
    this.addItem();
    
 
   
  }
  
 dateValidator(AC: AbstractControl){
    let date = new Date(AC.value);
    let now = new Date();
    now.setHours(0,0,0,0);
    if(date.getTime()<now.getTime())
    {
      return{dateValidator:true}
    }
    return null;
  }
  init(){
    return this._formBuilder.group({
      answer :new FormControl('', [Validators.required]),
      question :new FormControl('', [Validators.required]),
      option1 :new FormControl('', [Validators.required]),
      option2 :new FormControl('', [Validators.required]),
      option3 :new FormControl('', [Validators.required]),
      noteQuestion :new FormControl('', [Validators.required,Validators.min(1),Validators.max(5)]),
      name :new FormControl('', [Validators.required]),
    })

  }
  
 
   addItem(){
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
   
    
  }
 



  getArrayControls() {
    return (<FormArray>this.formGroup.get('form')).controls ;
  
  }


  


  onSubmit2() {
  this.exam.create(this.formGroup.value).subscribe((data) => {
    
    console.log(data)
  },
  error => {
    console.log(error)
  }
  
  )
  }

  /*onsub(){
    this.submitted1=true
    if(this.form.invalid )
    {
     
     
      console.log("hhhh")
    
    }
   


  }*/
  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return console.log("non")
    }else{
        console.log('vous avez cree un examen' );
    }
   
  this.exam.create(this.formGroup.value).subscribe((data) => {
    this.exam.getexams().subscribe((data)=>{
      console.log(data);
      this.t=data.length-1;
      console.log(data[this.t]["id"]);
      for(var i=0;i<data[this.t]["questionschemas"].length;i++)
     { 
       console.log(data[this.t]["questionschemas"][i]["noteQuestion"]);
      this.note1+=data[this.t]["questionschemas"][i]["noteQuestion"];
     
    } console.log(this.note1)
      this.id=data[this.t]["id"];
      this.list=
      {  
       "note":this.note1
      } 
      this.exam.UpdateNoteExamen(this.id,this.list).subscribe((data)=>
      {
    
        console.log(data)
      })
    })
  })
 }
 menu()
 {
  this.router.navigate(["/menu2"]); 

 }
}