import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from 'src/shared/models/gallery.model';
import { GallerysService } from 'src/shared/services/gallerys.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.scss']
})
export class GalleryAddComponent implements OnInit {
  showBusy = false;
  gallery: Gallery;
  id;

  constructor(
    private galleryService: GallerysService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = activeRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    if (this.id) {
      this.showBusy = true;
      await this.galleryService.get(this.id).subscribe(data => {
        this.gallery = data as Gallery;
        this.showBusy = false;
      });
    }
  }

  onCreate(event) {
    console.log(event);
    this.showBusy = true;
    this.galleryService
      .create(event)
      .then(ref => {
        this.showBusy = false;
        console.log('Gallery Created Successfully');
        this.router.navigate(['/dashboard/gallery-list']);
      })
      .catch(error => {
        this.showBusy = false;
        console.log('Gallery could not create');
      });
  }

  onUpdate(event) {
    console.log(event);
    this.showBusy = true;
    this.galleryService
      .update(this.id, event)
      .then(ref => {
        this.showBusy = false;
        console.log('Gallery updated Successfully');
        this.router.navigate(['/dashboard/gallery-list']);
      })
      .catch(error => {
        this.showBusy = false;
        console.log('Gallery could not update');
      });
  }
}
