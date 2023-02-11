import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL2 = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('user'));
    return participant.username;
  }
  getQuestions() {
    return this.http.get(API_URL2 + '/questions');
  }
  getAnswers() {
    var body = this.qns.map(x => x.QnID);
    return this.http.post( API_URL2+ '/answers', body);
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('questionschema'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.put(API_URL2 + "/questions/id", body);
  }


}
