import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class ApiService {
  apiurl = 'http://5aa531ddf207ec00144accf1.mockapi.io/api/angular';

  constructor (private http: Http){}
  getlist():Observable{
    return this.http.get(this.apiurl).map((response : Response)=>response.json())
  }
}
