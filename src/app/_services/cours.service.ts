import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }

/************************Module1*****************/
//session1
uploadCours1S1(file: File,cours:any): Observable<any>{
 const formData: FormData = new FormData();

  formData.append('file', file);
  formData.append('description', cours.description);


  const req = new HttpRequest('POST', API_URL+'uploadcours1s1', formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
getFilesCours1S1(): Observable<any> {
  return this.http.get('http://localhost:8080/api/file/cours1s1');
}
//session2
uploadCours1S2(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours1s2', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours1S2(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours1s2');
 }

 //session3
uploadCours1S3(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);
   const req = new HttpRequest('POST', API_URL+'uploadcours1s3', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours1S3(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours1s3');
 }

 //session4
uploadCours1S4(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours1s4', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours1S4(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours1s4');
 }
 //session5
uploadCours1S5(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours1s5', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours1S5(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours1s5');
 }


 /* *****************************Module2*************************/
//session1
uploadCours2S1(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours2s1', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours2S1(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours2s1');
 }

 //session2
 uploadCours2S2(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours2s2', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours2S2(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours2s2');
  }

  //session3
 uploadCours2S3(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours2s3', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours2S3(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours2s3');
  }
  //session4
 uploadCours2S4(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours2s4', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours2S4(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours2s4');
  }
  //session5
 uploadCours2S5(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours2s5', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours2S5(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours2s5');
  }

  /*********************************************Module3**************************************************/
//session1
uploadCours3S1(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours3s1', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours3S1(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours3s1');
 }
 //session2
 uploadCours3S2(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours3s2', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours3S2(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours3s2');
  }
  //session3
 uploadCours3S3(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours3s3', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours3S3(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours3s3');
  }
  //session4
 uploadCours3S4(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours3s4', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours3S4(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours3s4');
  }
  //session5
 uploadCours3S5(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours3s5', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours3S5(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours3s5');
  }

  /*****************************************Module4***************************************/
//session1
uploadCours4S1(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours4s1', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours4S1(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours4s1');
 }
 //session2
 uploadCours4S2(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours4s2', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours4S2(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours4s2');
  }
  //session3
 uploadCours4S3(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours4s3', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours4S3(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours4s3');
  }
  //session4
 uploadCours4S4(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours4s4', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours4S4(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours4s4');
  }
  //session5
 uploadCours4S5(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours4s5', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours4S5(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours4s5');
  }
 
  /****************************Module5**********************************/
//session1
uploadCours5S1(file: File,cours:any): Observable<any>{
  const formData: FormData = new FormData();
 
   formData.append('file', file);
   formData.append('description', cours.description);

   const req = new HttpRequest('POST', API_URL+'uploadcours5s1', formData, {
     reportProgress: true,
     responseType: 'json'
   });
 
   return this.http.request(req);
 }
 getFilesCours5S1(): Observable<any> {
   return this.http.get('http://localhost:8080/api/file/cours5s1');
 }
 //session2
 uploadCours5S2(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours5s2', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours5S2(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours5s2');
  }
  //session3
 uploadCours5S3(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours5s3', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours5S3(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours5s3');
  }
  //session4
 uploadCours5S4(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours5s4', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours5S4(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours5s4');
  }
  //session5
 uploadCours5S5(file: File,cours:any): Observable<any>{
   const formData: FormData = new FormData();
  
    formData.append('file', file);
    formData.append('description', cours.description);

    const req = new HttpRequest('POST', API_URL+'uploadcours5s5', formData, {
      reportProgress: true,
      responseType: 'json'
    });
  
    return this.http.request(req);
  }
  getFilesCours5S5(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/cours5s5');
  }

  // delete cours
  deleteCOURS(id): Observable<any> {
    return this.http.delete(API_URL+id+'/deletecours',{ responseType: 'text' });
   
   }
 
 
 

 


}








