import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealsListComponent } from './hotdeals-list.component';

describe('HotdealsListComponent', () => {
  let component: HotdealsListComponent;
  let fixture: ComponentFixture<HotdealsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdealsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
