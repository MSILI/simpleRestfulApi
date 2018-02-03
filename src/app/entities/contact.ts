export class Contact {

  public id: number;
  constructor( private nom: string, private prenom: string,
               private dateNaissance: string, private email: string,
               private telephone: number, private photo: string) {
  }
}
