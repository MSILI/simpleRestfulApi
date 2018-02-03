import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsListComponent} from './components/contacts-list/contacts-list.component';
import {AboutComponent} from './components/about/about.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {EditContactComponent} from './components/edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: 'edit-contact/:id', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
