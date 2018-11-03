import { Component, OnInit } from '@angular/core';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { HotdealsService } from 'src/shared/services/hotdeals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotdeals-list',
  templateUrl: './hotdeals-list.component.html',
  styleUrls: ['./hotdeals-list.component.scss']
})
export class HotdealsListComponent implements OnInit {
  hotdeals: Hotdeal[];
  showLoading = true;

  constructor(
    private hotdealService: HotdealsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllHotDeals();
  }

  async getAllHotDeals() {
    this.showLoading = true;
    await this.hotdealService.getAll().subscribe(
      data => {
        this.hotdeals = data;
        this.showLoading = false;
      },
      error => {
        console.log('hotdeals loading error');
        this.showLoading = false;
      }
    );
  }

  onEdit(id: string) {
    console.log('on edit', id);
    this.router.navigate(['/dashboard/hotdeals-add', id]);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete')) {
      console.log(id);
    }
  }
}
