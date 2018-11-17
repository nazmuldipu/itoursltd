import { Component, OnInit } from '@angular/core';
import { HotdealsService } from '../../../shared/services/hotdeals.service';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotdeals-add',
  templateUrl: './hotdeals-add.component.html',
  styleUrls: ['./hotdeals-add.component.scss']
})
export class HotdealsAddComponent implements OnInit {
  showBusy = false;
  hotdeal: Hotdeal;
  id;

  constructor(
    private hotdealService: HotdealsService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    if (this.id) {
      this.showBusy = true;
      await this.hotdealService.hotdeals$.subscribe(data => {
        this.hotdeal = data.find(hd => hd.id == this.id);
        this.showBusy = false;
      });
    }
  }

  onCreate(event) {
    this.showBusy = true;
    this.hotdealService
      .create(event)
      .then(ref => {
        this.showBusy = false;
        console.log('Hotdeal Created Successfully');
        this.router.navigate(['/dashboard/hotdeals-list']);
      })
      .catch(error => {
        this.showBusy = false;
        console.log('Hotdeal could not create');
      });
  }

  onUpdate(event) {
    this.showBusy = true;
    this.hotdealService
      .update(this.id, event)
      .then(ref => {
        this.showBusy = false;
        console.log('Hotdeal updated Successfully');
        this.router.navigate(['/dashboard/hotdeals-list']);
      })
      .catch(error => {
        this.showBusy = false;
        console.log('Package could not update');
      });
  }
}
