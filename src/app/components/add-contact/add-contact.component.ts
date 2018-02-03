import { Component, OnInit } from '@angular/core';
import {Contact} from '../../entities/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: any = new Contact('', '', null, '', null, '');
  public errorMsg: string;
  public mode = 1;
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  public addContact() {
    this._contactService.addContact(this.contact).subscribe(data => {
      console.log(data);
      this.contact = data;
      this.mode = 2;
    },
        error => this.errorMsg = error);
  }

}
