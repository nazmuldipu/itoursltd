import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/shared/models/gallery.model';
import { GallerysService } from 'src/shared/services/gallerys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallerys: Gallery[];
  showLoading = true;

  constructor(
    private galleryService: GallerysService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllGallery();
  }

  async getAllGallery() {
    this.showLoading = true;
    await this.galleryService.gallerys$.subscribe(
      data => {
        if (data.length) {
          data = data.filter(dat => dat.active == true);
        }
        this.gallerys = data;
        this.showLoading = false;
      },
      error => {
        console.log('gallerys loading error');
        this.showLoading = false;
      }
    );
  }

  onGalleryDetails(id: string) {
    this.router.navigate(['/gallerys', id]);
  }
}
