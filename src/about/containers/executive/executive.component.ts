import { Component } from '@angular/core';
import { ExecutiveDesignation } from 'src/shared/json/executive-designation';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.scss']
})
export class ExecutiveComponent {
  executiveList;

  constructor() {
    this.executiveList = ExecutiveDesignation;
  }
}
