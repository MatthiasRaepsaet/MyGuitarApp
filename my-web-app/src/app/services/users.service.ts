import { Injectable } from '@angular/core';
import {LoginDto} from "../dtos/LoginDto";
import {UserDto} from "../dtos/UserDto";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {GuitarDto} from "../dtos/GuitarDto";

@Injectable()
export class UsersService {

  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public loginUser(loginDto : LoginDto): Observable<UserDto> {
    return this.http.post("http://localhost:3000/users/login", JSON.stringify(loginDto), this.options).map((response : Response) => response.json());
  }

  public getUser(userId : number):  Observable<UserDto>{
    console.log( this.http.get("http://localhost:3000/users/getuserbyid/" + userId, this.options).map((response: Response) => response.json()));
    return this.http.get("http://localhost:3000/users/getuserbyid/" + userId, this.options).map((response: Response) => response.json());
  }

  public addGuitarToCollection(userId: number, guitar: GuitarDto){
    return this.http.post("http://localhost:3000/users/addguitartocollection/" + userId, JSON.stringify(guitar), this.options).map((response : Response) => response.json());
  }

  public addUser(user){
    return this.http.post("http://localhost:3000/users/adduser", JSON.stringify(user), this.options).map((response : Response) => response.json());
  }
}
