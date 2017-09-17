import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class PeopleServiceProvider {
  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }
  getPeople (){
    return this.http.get('https://randomuser.me/api/?results=300')
    .map(res => res.json())

  }
}