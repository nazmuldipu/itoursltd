import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { Package } from 'src/shared/models/package.model';
import { PackagesService } from 'src/shared/services/packages.service';

@Component({
  selector: 'app-packages-image',
  templateUrl: './packages-image.component.html',
  styleUrls: ['./packages-image.component.scss']
})
export class PackagesImageComponent implements OnInit {
  id;
  package: Package;
  imageUrl;
  url;
  image;
  uploadPercent: any;
  downloadURL: Observable<string>;

  constructor(
    private packageService: PackagesService,
    private ng2ImgMax: Ng2ImgMaxService,
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.url = 'packages/' + this.id;
  }

  async ngOnInit() {
    await this.packageService.get(this.id).subscribe(
      data => {
        this.package = data as Package;
        this.imageUrl = this.package.imageUrl;
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
            this.package.imageUrl = url;

            this.packageService.update(this.id, this.package).then(data => {
              console.log('😢 Image url updated');
            });
          });
        })
      )
      .subscribe();
  }
}
