import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Contact} from '../entities/contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public getContacts(motCle: string, page: number, size: number) {
    return this.http.get('http://localhost:8080/searchContact?kw=' + motCle + '&page=' + page + '&size=' + size)
      .catch(this.errorHandler);
  }

  public addContact(contact: Contact) {
    return this.http.post('http://localhost:8080/contacts', contact);
  }

  public getContact (id: number) {
    return this.http.get('http://localhost:8080/contacts/' + id);
  }

  public updateContact(contact: Contact) {
    return this.http.put('http://localhost:8080/contacts/' + contact.id, contact);
  }

  public removeContact(idContact: number) {
    return this.http.delete('http://localhost:8080/contacts/' + idContact,);
  }
  public errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error !');
  }
}
