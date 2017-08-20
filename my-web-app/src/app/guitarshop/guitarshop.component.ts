import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {GuitarsService} from "../services/guitars.service";
import {GuitarDto} from "../dtos/GuitarDto";

@Component({
  selector: 'app-guitarshop',
  templateUrl: './guitarshop.component.html',
  styleUrls: ['./guitarshop.component.css']
})
export class GuitarshopComponent implements OnInit {

  @Output()
  guitar: GuitarDto;

  guitarList: GuitarDto[] = [];

  detailedView: boolean = false;

  constructor(private router: Router, guitarsService: GuitarsService) {
    if(localStorage.getItem("loginValidated") == null || localStorage.getItem("loginValidated") === "false") {
      this.router.navigate(['/login']);
    }
    guitarsService.getGuitars().subscribe(guitars => {
      this.guitarList = guitars;
    });
  }

  ngOnInit() {

  }

  getDetails(guitar){
    this.guitar = guitar;
    this.detailedView = true;
  }

  terugReceiver(evt){
    this.detailedView = evt;
  }
}
