import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from "../services/users.service";
import {LoginDto} from '../dtos/LoginDto';
import {UserDto} from '../dtos/UserDto';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent implements OnInit {

  user: UserDto = new UserDto;
  showHeaderFooter: boolean;

  showAlert: boolean = false;
  usersService;

  constructor(private router: Router, usersService: UsersService) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.showHeaderFooter = false;
    localStorage.setItem('myUser', null);
    localStorage.setItem('loginValidated', 'false');
  }

  login(username: string, password: string) {
    localStorage.setItem('myUser', null);
    const userLogin: LoginDto = {username : username, password : password};
    this.usersService.loginUser(userLogin).subscribe(result => {
      this.user = result;
      if (this.user.username === username && this.user.password === password) {
        this.showHeaderFooter = true;
        console.log(this.showHeaderFooter);
        this.router.navigate(['/home']);
        console.log(JSON.parse(localStorage.getItem('myUser')));
        localStorage.setItem('myUser', JSON.stringify(this.user));
        localStorage.setItem('loginValidated', 'true');
        console.log(JSON.parse(localStorage.getItem('myUser')));
      } else {
        this.showAlert = true;
      }
    });
  }
}
