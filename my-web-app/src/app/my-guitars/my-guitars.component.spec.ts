import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGuitarsComponent } from './my-guitars.component';

describe('MyGuitarsComponent', () => {
  let component: MyGuitarsComponent;
  let fixture: ComponentFixture<MyGuitarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGuitarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
