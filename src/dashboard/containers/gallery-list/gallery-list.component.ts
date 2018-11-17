import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/shared/models/gallery.model';
import { GallerysService } from '../../../shared/services/gallerys.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
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
    await this.galleryService.gallerys$.subscribe(data => {
      this.gallerys = data;
      this.showLoading = false;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/dashboard/gallery-add', id]);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete')) {
      this.galleryService.delete(id).then(ref => {
        console.log('Gallery Deleted successfully');
      });
    }
  }
}
