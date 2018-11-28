import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page-stroke top"></div>

    <div class="page">
      <div class="page-block"><router-outlet></router-outlet></div>
    </div>
    <div class="page-stroke bottom"></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
