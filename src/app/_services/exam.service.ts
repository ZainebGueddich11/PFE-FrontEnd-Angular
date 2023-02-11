import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../models/exemen';
import { User_examen } from '../models/user_examen';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  constructor(private _http : HttpClient) { }
  getAll() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/" )

  }
  getexamenm1() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m" )

  }
  getexamencertif() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examencertif" )

  }
  getexamencertifId() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/certif/id" )

  }
  getexamenm1Id() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m/id" )

  }
  getexamenm2Id() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m2/id" )

  }
  getexamenm3Id() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m3/id" )

  }
  getexamenm4Id() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m4/id" )

  }
  getexamenm5Id() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m5/id" )

  }
  getexamenm2() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m2" )

  }
  getexamenm3() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m3" )

  }
  getexamenm4() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m4" )

  }
  getexamenm5() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/m5" )

  }
  getexam(id : any) : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examen/find/" + id  )

  }
  getexams() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/examens"  )

  }

  create(examen : Examen) : Observable<any> {

    return this._http.post("http://localhost:8080/examen/create/" , examen  )
  }
  getanswer(id:any) : Observable<any> {

    return this._http.get("http://localhost:8080/questionschemas/getanswer/"+id)
  }
  
  createNote(id:any,data:any) : Observable<any> {

    return this._http.put(" http://localhost:8080/examen/note/"+id,data )
  }
  
  UpdateNoteExamen(id:any,data:any) : Observable<any> {

    return this._http.put(" http://localhost:8080/examen/updateNoteExamen/"+id,data )
  }
  
  createUserExamen(data:any): Observable<any>
  {
    return this._http.post( "http://localhost:8080/createExamenUser ",data);
  }
  getUserExamen() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/getExamenUser"  )

  }
  
  getUserExamen1() : Observable<any>  {
  

    return this._http.get("http://localhost:8080/getExamenUser1"  )

  }
  getsumNote() : Observable<any>  {
  

    return this._http.get(" http://localhost:8080/sumNote"  )

  }
 
  getQuestionSchemas():Observable<any>{
    return this._http.get("http://localhost:8080/getQuestionSchemas");
  }
  getUserExamenExamenId(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getIdExamen/"+id);
  }
  listExamen1liste():Observable<any>{
    return this._http.get("http://localhost:8080/listExamen1liste");
  }
  getUserExamenNomExamen(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenNomExamen/"+id);
  }




  getUserExamenactif(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenactifM1/"+id);
  }
  getUserExamenactifM2(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenactifM2/"+id);
  }
  
  getUserExamenactifM3(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenactifM3/"+id);
  }

 getUserExamenactifM4(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenactifM4/"+id);
  }
  getUserExamenactifM5(id:any):Observable<any>{
    return this._http.get("http://localhost:8080/getUserExamenactifM5/"+id);
  }



  deleteExamen(id): Observable<any> {
    return this._http.delete("http://localhost:8080/"+id+'/deleteExamen',{ responseType: 'text' });

   }
   getexamenModule() : Observable<any>  {
  

    return this._http.get(" http://localhost:8080/examenModule/"  )

  }

  getUserexamenModule(id) : Observable<any>  {
  

    return this._http.get(" http://localhost:8080/UserexamenModule/" +id )

  }

  certif(id:any) : Observable<any> {

    return this._http.get(" http://localhost:8080/certif/"+id )
  }
  countuserfailed() : Observable<any>  {
  
    return this._http.get(" http://localhost:8080/countuserfailed"  )

  }
  countusersuccess() : Observable<any>  {
  
    return this._http.get(" http://localhost:8080/countusersuccess"  )

  }
  getnombreusercertif() : Observable<any>  {
  
    return this._http.get(" http://localhost:8080/getnombreusercertif"  )

  }
}
