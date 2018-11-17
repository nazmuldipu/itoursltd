import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { Hotdeal } from 'src/shared/models/hotdeal.model';
import { HotdealsService } from 'src/shared/services/hotdeals.service';

@Component({
  selector: 'app-hotdeals-image',
  templateUrl: './hotdeals-image.component.html',
  styleUrls: ['./hotdeals-image.component.scss']
})
export class HotdealsImageComponent implements OnInit {
  id;
  hotdeal: Hotdeal;
  imageUrl;
  url;
  image;
  uploadPercent: any;
  showBusy = false;
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
    if (this.id) {
      this.showBusy = true;
      await this.hotdealsService.hotdeals$.subscribe(
        data => {
          this.hotdeal = data.find(hd => hd.id == this.id);
          this.imageUrl = this.hotdeal.imageUrl;
          this.showBusy = false;
        },
        error => console.log(error)
      );
    }
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
            this.hotdeal.imageUrl = url;

            this.hotdealsService.update(this.id, this.hotdeal).then(data => {
              console.log('😢 Image url updated');
            });
          });
        })
      )
      .subscribe();
  }
}
