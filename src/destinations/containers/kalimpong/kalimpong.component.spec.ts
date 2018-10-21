import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalimpongComponent } from './kalimpong.component';

describe('KalimpongComponent', () => {
  let component: KalimpongComponent;
  let fixture: ComponentFixture<KalimpongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalimpongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalimpongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
