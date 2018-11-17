import { Component, OnInit } from '@angular/core';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { ActivatedRoute } from '@angular/router';
import { HotdealsService } from 'src/shared/services/hotdeals.service';

@Component({
  selector: 'app-hotdeals-details',
  templateUrl: './hotdeals-details.component.html',
  styleUrls: ['./hotdeals-details.component.scss']
})
export class HotdealsDetailsComponent implements OnInit {
  hotdeal: Hotdeal;
  hotdeals: Hotdeal[];
  showBusy = false;
  id;

  constructor(
    private hotdealService: HotdealsService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAllHotDeals();
  }

  async getAllHotDeals() {
    await this.hotdealService.hotdeals$.subscribe(data => {
      this.hotdeals = data;
      if (this.id) {
        this.getHotdeal(this.id);
      } else if (data.length) {
        this.getHotdeal(data[0].id);
      }
    });
  }

  getHotdeal(id: string) {
    this.hotdeal = null;
    this.hotdeal = this.hotdeals.find(hd => hd.id == id);
  }
}
