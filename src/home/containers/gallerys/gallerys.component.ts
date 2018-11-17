import { Component, OnInit, ViewChild } from '@angular/core';
import { GallerysService } from 'src/shared/services/gallerys.service';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'src/shared/models/gallery.model';

@Component({
  selector: 'app-gallerys',
  templateUrl: './gallerys.component.html',
  styleUrls: ['./gallerys.component.scss']
})
export class GallerysComponent implements OnInit {
  gallery: Gallery;
  gallerys: Gallery[];
  showBusy = false;
  id;

  constructor(
    private gallerySService: GallerysService,
    private activeRoute: ActivatedRoute
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getAllGalleries();
  }

  async getAllGalleries() {
    await this.gallerySService.gallerys$.subscribe(data => {
      this.gallerys = data;
      if (this.id) {
        this.getGallery(this.id);
      } else if (data.length) {
        this.getGallery(data[0].id);
      }
    });
  }

  getGallery(id: string) {
    this.gallery = null;
    this.gallery = this.gallerys.find(hd => hd.id == id);
  }
}
