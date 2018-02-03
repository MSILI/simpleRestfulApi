import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ContactService} from './services/contact.service';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import {FormsModule} from '@angular/forms';
import { AddContactComponent } from './components/add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AboutComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
