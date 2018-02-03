import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/searchContact?kw=' + motCle + '&page=' + page + '&size=' + size)
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error !');
  }
}
