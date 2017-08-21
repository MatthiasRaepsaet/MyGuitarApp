import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login-component';
import {UsersService} from "../services/users.service";
import {RouterModule} from '@angular/router';
import {AlertComponent} from "../alert/alert.component";
import { DebugElement} from "@angular/core";
import { Router } from '@angular/router';

describe('LoginComponentComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let usersService;
  let spy;

  let usersServiceStub = {
    logUser : {username: "matthy", password: "1234"},
    emptyUser : ""
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, AlertComponent ],
      providers: [ {provide: UsersService, useValue: usersServiceStub } ],
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not log in', () => {
    this.login("matthy","12345");
    expect(this.showAlert).toBe(true);
  });

  it('should log in', () => {
    this.login("matthy","1234");
    expect(this.showAlert).toBe(false);
  });
});
