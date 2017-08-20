import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarshopComponent } from './guitarshop.component';

describe('GuitarshopComponent', () => {
  let component: GuitarshopComponent;
  let fixture: ComponentFixture<GuitarshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
