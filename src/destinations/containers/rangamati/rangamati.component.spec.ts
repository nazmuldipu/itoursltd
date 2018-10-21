import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangamatiComponent } from './rangamati.component';

describe('RangamatiComponent', () => {
  let component: RangamatiComponent;
  let fixture: ComponentFixture<RangamatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangamatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangamatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
