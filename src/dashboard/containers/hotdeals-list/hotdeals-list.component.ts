import { Component, OnInit } from '@angular/core';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { HotdealsService } from 'src/shared/services/hotdeals.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-hotdeals-list',
  templateUrl: './hotdeals-list.component.html',
  styleUrls: ['./hotdeals-list.component.scss']
})
export class HotdealsListComponent implements OnInit {
  hotdeals: Hotdeal[];
  showLoading = false;

  constructor(
    private hotdealService: HotdealsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.getAllHotDeals();
  }

  async getAllHotDeals() {
    this.showLoading = true;
    await this.hotdealService.hotdeals$.subscribe(data => {
      this.hotdeals = data;
      this.showLoading = false;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/dashboard/hotdeals-add', id]);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete')) {
      const hd = this.hotdeals.find(hdd => hdd.id === id).imageUrl;
      //remove image first
      this.storage.storage.refFromURL(hd).delete();

      this.hotdealService.delete(id).then(rf => {
        console.log('Delete hotdels success');
      });
    }
  }
}
