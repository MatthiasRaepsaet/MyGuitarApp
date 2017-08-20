import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GuitarDto} from "../dtos/GuitarDto";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  guitar: GuitarDto;

  @Output()
  terugEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit() {
  }

  emitTerug(){
    this.terugEmitter.emit(false);
  }

  addToCollection(){
    this.usersService.addGuitarToCollection(JSON.parse(localStorage.getItem('myUser'))._id, this.guitar).subscribe(result => {
      this.router.navigate(['/my-guitars']);
    });
  }
}
