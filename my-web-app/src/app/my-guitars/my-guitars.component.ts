import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {GuitarDto} from "../dtos/GuitarDto";

@Component({
  selector: 'app-my-guitars',
  templateUrl: './my-guitars.component.html',
  styleUrls: ['./my-guitars.component.css']
})
export class MyGuitarsComponent implements OnInit {

  guitarList: GuitarDto[];
  noGuitars: boolean = true;

  constructor(private router: Router,private usersService: UsersService) {
    if(localStorage.getItem("loginValidated") == null || localStorage.getItem("loginValidated") === "false") {
      this.router.navigate(['/login']);
    }
    this.usersService.getUser(JSON.parse(localStorage.getItem('myUser'))._id).subscribe(user => {
      console.log(user);
      this.guitarList = user.guitars;
      if(this.guitarList.length === 0){
        this.noGuitars = true;
        console.log(this.noGuitars);
      } else{
        console.log(this.noGuitars);
        this.noGuitars = false;
      }
    });
  }

  ngOnInit() {
  }


}
