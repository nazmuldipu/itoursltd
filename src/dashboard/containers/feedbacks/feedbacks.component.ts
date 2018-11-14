import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/shared/services/feedback.service';
import { Feedback } from 'src/shared/models/feedback.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  feedbacks: Feedback[];
  showLoading = true;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.getAllFeedbacks();
  }

  async getAllFeedbacks() {
    this.showLoading = true;
    await this.feedbackService.getAll().subscribe(data => {
      this.feedbacks = data;
      this.showLoading = false;
    });
  }
}
