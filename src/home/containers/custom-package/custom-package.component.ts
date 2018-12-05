import { Component } from '@angular/core';
import { CustomPackageService } from 'src/shared/services/custom-package.service';
import { CustomPackage } from 'src/shared/models/custom-package.model';
import { Router } from '@angular/router';
import { EmailService } from '../../../shared/services/email.service';

@Component({
  selector: 'app-custom-package',
  templateUrl: './custom-package.component.html',
  styleUrls: ['./custom-package.component.scss']
})
export class CustomPackageComponent {
  sending = false;

  constructor(
    private customPackageService: CustomPackageService,
    private router: Router,
    private email: EmailService
  ) {}

  onCreate(event: CustomPackage) {
    this.sending = true;
    this.customPackageService.create(event).then(ref => {
      console.log('Custom package created successfully');
      this.sending = false;
      this.router.navigate(['/thankyou']);
    });
  }

  sendEmail() {
    this.email.sendEmail(' This is a send message to you');
    console.log('Email send from component');
  }
}
