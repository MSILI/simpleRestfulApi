import { Component, OnInit } from '@angular/core';
import {Contact} from '../../entities/contact';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public contact: any = new Contact('', '', null, '', null, '');
  public errorMsg: string;
  public mode = 1;
  private idContact = 0;
  constructor(private _contactService: ContactService, private activatedRoute: ActivatedRoute) {
    this.idContact = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this._contactService.getContact(this.idContact)
      .subscribe(data => {
          this.contact = data;
          console.log(this.contact);
        },
        error => this.errorMsg = error);
  }

  public updateContact() {
    this._contactService.updateContact(this.contact)
      .subscribe(data => {
          this.contact = data;
          this.mode = 2;
        },
        error => this.errorMsg = error);
  }


}
