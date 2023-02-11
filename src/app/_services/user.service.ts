import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = 'http://localhost:8080/api/test/';
const API_URL2 = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users : any;
admin : any;
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  update(id, data): Observable<any> {
   return this.http.put(API_URL2+id,data);
  // return this.http.put('${API_URL2}/${id}',data);
  }
  get(id): Observable<any>
  {
    return this.http.get(API_URL2+id);
  }

  getUsers() {
   this.http.get(API_URL2+'api/getUser').subscribe(res =>{
      
      this.users=res;
      console.log("UserService -> getUsers -> this.users",this.users);
      return this.users;
    });
  }
  getAdmin() {
    this.http.get(API_URL2+'api/getAdmin').subscribe(res =>{
       
       this.admin=res;
       console.log("admin :",this.admin);
       return this.admin;
     });
   }
 
  getModerators() {
    this.http.get(API_URL2+'api/getmoderator')
    .subscribe(res =>{
       
       this.users=res;
       console.log("UserService -> getUsers -> this.users",this.users);
     });
   }
   getModerators1() : Observable<any> {
    return this.http.get(API_URL2+'api/getmoderator');
   }
   getCountUser(): Observable<any> {
    return this.http.get(API_URL2+'usercount');
  }
   updateModerator(id, user): Observable<any> {
    return this.http.put(API_URL2+id+'/updatemoderator',user);
   // return this.http.put('${API_URL2}/${id}/updatemoderator',data);
   }
   deleteModerator(id): Observable<any> {
    return this.http.delete(API_URL2+id+'/deletemoderator',{ responseType: 'text' });
   // return this.http.put('${API_URL2}/${id}',data);
   }
  


  create(user: any): Observable<any> {
    return this.http.post(API_URL2+'addmoderator', {
      username: user.username,
      email: user.email,
      nomModule: user.nomModule,
      password: user.password,
      pays: user.pays,
      ville: user.ville
    }, httpOptions);
  }

  uploadfile(file: File,cours:any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL2+'upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('photo', file);

    const req = new HttpRequest('POST', API_URL2+'user/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
 
  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
  getUsers1(): Observable<any> {
    return this.http.get(API_URL2 + 'api/getUser');
   }

   sendEmail(to, subject,text) {
    const uri = 'http://localhost:8080/sendemail';
    const obj = {
     to: to,
      subject:subject,
      text: text,
    };
    return this.http.post(uri, obj);
  }
}
