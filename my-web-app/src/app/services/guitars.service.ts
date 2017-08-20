import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {GuitarDto} from "../dtos/GuitarDto";
import 'rxjs/add/operator/map';

@Injectable()
export class GuitarsService {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  public getGuitars(): Observable<GuitarDto[]> {
    return this.http.get("http://localhost:3000/guitars/getguitars", this.options).map((response : Response) => response.json());
  }

}
