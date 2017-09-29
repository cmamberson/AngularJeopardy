import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answer;
  wrongAnswer;
  correctAnswer;

  @Input() questionInfo;
  @Input() score;
  @Output() refreshQuestion = new EventEmitter<any>();



  constructor() { }

  ngOnInit() {
  }

  submitClick(answer){
    this.answer = answer;
    if (answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.score += this.questionInfo.value
      this.answer = "";
      this.wrongAnswer = false;
      this.correctAnswer = true;
      this.refreshQuestion.emit()
    }
    else{
      this.wrongAnswer = true;
      this.correctAnswer = false;
      this.answer = "";
      this.refreshQuestion.emit()
    }

  }
}
