import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';


@Component({
  selector: 'app-client-form',
  standalone: true,
  //add your needed dependencies here for this component
  imports: [FormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

  //property setting our FORM to not yet submitted
  submitted: boolean = false;
	//property representing an object of Client class
  model: Client;
  
  constructor(){
    //let model;
    this.model = new Client(1,'John Doe', 'johndoe@example.com', '123 Main Street', 'abc12345', 'abc12345');
  }
  /////////////////////////////////////////////
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }
}

