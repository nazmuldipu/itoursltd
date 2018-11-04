import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesImageComponent } from './packages-image.component';

describe('PackagesImageComponent', () => {
  let component: PackagesImageComponent;
  let fixture: ComponentFixture<PackagesImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
