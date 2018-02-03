import { Component, OnInit } from '@angular/core';
import {Contact} from '../../entities/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-add-contact-v-two',
  templateUrl: './add-contact-v-two.component.html',
  styleUrls: ['./add-contact-v-two.component.css']
})
export class AddContactVTwoComponent implements OnInit {

  public contact: any;
  public errorMsg: string;
  public mode = 1;
  constructor(private _contactService: ContactService) { }

  ngOnInit() {
  }

  public onSaveContact(dataForm) {
    this._contactService.addContact(dataForm).subscribe(data => {
        this.contact = data;
        this.mode = 2;
      },
      error => this.errorMsg = error);
  }
}
