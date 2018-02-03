import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public infos = {
    nom: 'MSILI',
    prenom: 'Fatah',
    email : 'fatahmsili@gmail.com',
    telephone: '06 69 09 52 32'
  };
  constructor() { }

  ngOnInit() {
  }

}
