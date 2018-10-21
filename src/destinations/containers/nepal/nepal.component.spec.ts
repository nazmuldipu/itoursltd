import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepalComponent } from './nepal.component';

describe('NepalComponent', () => {
  let component: NepalComponent;
  let fixture: ComponentFixture<NepalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
