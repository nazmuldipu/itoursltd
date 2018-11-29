import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { PackagesService } from '../../../shared/services/packages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  innerWidth;
  divWidth: number;
  packages;

  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  constructor(
    private packageService: PackagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.packageService.packageSideNav$.subscribe(data => {
      this.packages = data;
    });
    this.divWidth = Math.round(
      this.widgetsContent.nativeElement.offsetWidth / 3
    );
  }

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

  onPackageClick(id: string) {
    console.log('id', id);
    this.router.navigate(['/package-details', id]);
  }
}
