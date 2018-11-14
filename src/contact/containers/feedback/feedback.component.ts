import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/shared/services/feedback.service';
import { Feedback } from 'src/shared/models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  sending = false;
  message = '';

  constructor(private feedbackService: FeedbackService) {}

  onCreate(event: Feedback) {
    this.sending = true;
    console.log('Feedback :', event);
    this.feedbackService.create(event).then(ref => {
      this.sending = false;
      this.message = 'Thank you for your feed back';
      console.log('Feedback sended');
    });
  }
}
