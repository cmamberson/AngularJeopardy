import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  score = 0;
  questionInfo;


  constructor(private jeopardyService: JeopardyService){}
    
    getDataFromService(){
      this.jeopardyService.getQuestionInfo()
        .subscribe(
          questionInfo => {
            this.questionInfo = questionInfo[0];
            console.log("The answer is: " + questionInfo[0].answer)
          }
        )
    }

    ngOnInit(){
      this.getDataFromService();
    }

    
    
}





