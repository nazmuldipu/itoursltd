import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealsAddComponent } from './hotdeals-add.component';

describe('HotdealsAddComponent', () => {
  let component: HotdealsAddComponent;
  let fixture: ComponentFixture<HotdealsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdealsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
