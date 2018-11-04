import { Component, OnInit } from '@angular/core';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { HotdealsService } from '../../../shared/services/hotdeals.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-hotdeals-image',
  templateUrl: './hotdeals-image.component.html',
  styleUrls: ['./hotdeals-image.component.scss']
})
export class HotdealsImageComponent implements OnInit {
  id;
  hotdeal: Hotdeal;
  imageUrl;
  imagePreview;
  url;
  image;
  uploadPercent: any;
  downloadURL: Observable<string>;

  constructor(
    private hotdealsService: HotdealsService,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.url = 'hotdeals/' + this.id;
  }

  async ngOnInit() {
    await this.hotdealsService.get(this.id).subscribe(
      data => {
        this.hotdeal = data as Hotdeal;
        this.imageUrl = this.hotdeal.imageUrl;
      },
      error => console.log(error)
    );
  }

  fileChange(event) {
    let image = event.target.files[0];
    this.resizeImage(image, 800, 600);
  }

  resizeImage(image, maxWidth, maxHeight) {
    this.ng2ImgMax.resizeImage(image, maxWidth, maxHeight).subscribe(
      result => {
        this.image = result;
        this.previewFile();
        // this.getImagePreview(new File([result], result.name));
        // this.uploadToFireStorage(result);
      },
      error => {
        console.log('😢 Image Resize error!!', error);
      }
    );
  }

  previewFile() {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.image);
  }

  getImagePreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
  }

  startUpload() {
    const fileRef = this.storage.ref(this.url);
    const task = this.storage.upload(this.url, this.image);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            // switch (mode) {
            //   case 0:
            this.hotdeal.imageUrl = url;
            //   break;
            // case 1:
            //   this.hotdeal.imageUrl = url;
            //   break;
            // case 2:
            //   this.hotdeal.imageUrl = url;
            //   break;
            // }
            console.log('update service');
            this.hotdealsService
              .update(this.hotdeal.id, this.hotdeal)
              .then(data => {
                console.log('😢 Image url updated');
              });
          });
        })
      )
      .subscribe();
  }
}
