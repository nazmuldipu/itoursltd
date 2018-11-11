import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GallerysService } from '../../../shared/services/gallerys.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { Gallery } from '../../../shared/models/gallery.model';
import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {
  id;
  image = [];
  url: string[] = [];
  imageUrls: string[] = [];
  uploadPercent = [];
  gallery: Gallery;
  downloadURL: Observable<string>;
  resizing = false;
  uploading = false;

  constructor(
    private gallerysService: GallerysService,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    for (let i = 0; i < 10; i++) {
      this.imageUrls.push('');
      this.image.push();
      this.uploadPercent.push(0);
      this.url.push('gallery/' + this.id + '/' + i);
    }
  }

  async ngOnInit() {
    await this.gallerysService.get(this.id).subscribe(
      data => {
        this.gallery = data as Gallery;
        if (this.gallery.imageUrls) {
          this.gallery.imageUrls.forEach((ar, i) => {
            this.imageUrls[i] = ar;
          });
        } else {
          for (let i = 0; i < 10; i++) {
            this.gallery.imageUrls = this.imageUrls;
          }
        }
      },
      error => console.log(error)
    );
  }

  fileChange(event, i: number) {
    this.resizing = true;
    let image = event.target.files[0];
    this.resizeImage(image, 800, 600, i);
  }
  resizeImage(image, maxWidth, maxHeight, i: number) {
    this.ng2ImgMax.resizeImage(image, maxWidth, maxHeight).subscribe(
      result => {
        this.image[i] = result;
        this.previewFile(i);
      },
      error => {
        console.log('😢 Image Resize error!!', error);
      }
    );
  }
  previewFile(i: number) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrls[i] = e.target.result;
      this.resizing = false;
    };
    reader.readAsDataURL(this.image[i]);
  }

  startUpload(i: number) {
    this.uploading = true;
    const fileRef = this.storage.ref(this.url[i]);
    const task = this.storage.upload(this.url[i], this.image[i]);

    // observe percentage changes
    // this.uploadPercent[i] = task.percentageChanges();
    task.percentageChanges().subscribe(ref => {
      this.uploadPercent[i] = ref.valueOf();
    });

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(imurl => {
            this.gallery.imageUrls[i] = imurl;

            this.gallerysService.update(this.id, this.gallery).then(data => {
              console.log('😢 Image url updated');
              this.uploading = false;
            });
          });
        })
      )
      .subscribe();
  }
}
