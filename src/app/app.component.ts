import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  questionInfo;
  answer;
  score = 0;
  wrongAnswer;

  constructor(private jeopardyService: JeopardyService){}
    
    getDataFromService(){
      this.jeopardyService.getQuestionInfo()
        .subscribe(
          questionInfo => {
            this.questionInfo = questionInfo[0];
          }
        )
    }

    ngOnInit(){
      this.getDataFromService();
    }

    submitClick(answer){
      this.answer = answer;
      if (answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
        this.score += this.questionInfo.value
        this.getDataFromService();
        this.answer = "";
        this.wrongAnswer = false;
      }
      else{
        this.wrongAnswer = true;
      }

    }
    
}





