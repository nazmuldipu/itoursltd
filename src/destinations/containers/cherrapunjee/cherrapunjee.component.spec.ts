import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherrapunjeeComponent } from './cherrapunjee.component';

describe('CherrapunjeeComponent', () => {
  let component: CherrapunjeeComponent;
  let fixture: ComponentFixture<CherrapunjeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherrapunjeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherrapunjeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
