import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { HotdealsService } from 'src/shared/services/hotdeals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hot-deals',
  templateUrl: './hot-deals.component.html',
  styleUrls: ['./hot-deals.component.scss']
})
export class HotDealsComponent implements OnInit {
  innerWidth;
  divWidth: number;

  hotdeals: Hotdeal[];
  showLoading = true;

  constructor(
    private hotdealService: HotdealsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllHotDeals();
    this.innerWidth = window.innerWidth;
    this.divWidth = Math.round(
      this.widgetsContent.nativeElement.offsetWidth / 4
    );
  }

  async getAllHotDeals() {
    this.showLoading = true;
    await this.hotdealService.hotdeals$.subscribe(
      data => {
        this.hotdeals = data;
        this.showLoading = false;
      },
      error => {
        console.log('hotdeals loading error');
        this.showLoading = false;
      }
    );
    // await this.hotdealService.getAll().subscribe(
    //   data => {
    //     this.hotdeals = data;
    //     this.showLoading = false;
    //   },
    //   error => {
    //     console.log('hotdeals loading error');
    //     this.showLoading = false;
    //   }
    // );
  }

  onHotdealsDetails(id: string) {
    this.router.navigate(['/hotdeals', id]);
  }

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  scrollRight() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + this.divWidth,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - this.divWidth,
      behavior: 'smooth'
    });
  }
}
