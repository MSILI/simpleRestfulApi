import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsListComponent} from './components/contacts-list/contacts-list.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'contacts', component: ContactsListComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
