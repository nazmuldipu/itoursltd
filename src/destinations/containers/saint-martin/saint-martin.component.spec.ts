import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintMartinComponent } from './saint-martin.component';

describe('SaintMartinComponent', () => {
  let component: SaintMartinComponent;
  let fixture: ComponentFixture<SaintMartinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaintMartinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaintMartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
