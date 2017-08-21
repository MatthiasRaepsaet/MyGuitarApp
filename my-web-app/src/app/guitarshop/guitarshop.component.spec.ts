import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarshopComponent } from './guitarshop.component';
import {DetailComponent} from "../detail/detail.component";
import {GuitarsService} from "../services/guitars.service";

describe('GuitarshopComponent', () => {
  let component: GuitarshopComponent;
  let fixture: ComponentFixture<GuitarshopComponent>;
  let guitarsStub = {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DetailComponent],
      declarations: [ GuitarshopComponent ],
      providers: [ {provide: GuitarsService, useValue: guitarsStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should only have 2 guitars', () => {
    this.login("matthy","1234");
    expect(this.showAlert).toBe(false);
  });


});
