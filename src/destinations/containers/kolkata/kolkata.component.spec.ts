import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkataComponent } from './kolkata.component';

describe('KolkataComponent', () => {
  let component: KolkataComponent;
  let fixture: ComponentFixture<KolkataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolkataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
