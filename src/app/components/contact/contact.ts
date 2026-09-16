import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    console.log('Formulaire envoyé :', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Merci ' + this.name + ', votre message a bien été envoyé !');
  }
}