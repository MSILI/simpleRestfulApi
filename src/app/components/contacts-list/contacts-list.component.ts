import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../entities/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contactsPage: any;
  public errorMsg: string;
  public motCle = '';
  public curentPage = 0;
  public size = 5;
  public pages: Array<number>;
  constructor(private _contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.motCle = '';
    this.search();
  }

  private doSearch() {
    this._contactService.getContacts(this.motCle, this.curentPage, this.size)
      .subscribe(data => {
          this.contactsPage = data;
          this.pages = new Array<number>(data.totalPages);
      },
        error => this.errorMsg = error);
  }

  public search() {
    this.doSearch();
  }

  public goToPage(i: number) {
      this.curentPage = i;
      this.doSearch();
  }

  public onEditContact(id: number) {
    this.router.navigate(['edit-contact', id]);
  }

  public onRemoveContact(contact: Contact) {
    let confirm = window.confirm('Êtes-vous sur de vouloir supprimer cet élement ?');
    if(confirm == true) {
      this._contactService.removeContact(contact.id).subscribe(data => {
        this.contactsPage.content.splice(this.contactsPage.content.indexOf(contact, 1));
      }, error => this.errorMsg = error);
    }
  }
}
