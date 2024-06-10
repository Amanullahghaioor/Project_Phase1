import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meeting } from '../meeting';


@Component({
  selector: 'app-client-form',
  standalone: true,
  //add your needed dependencies here for this component
  imports: [FormsModule, CommonModule],
  templateUrl: './meeting-form.component.html',
  styleUrl: './meeting-form.component.css'
})
export class MeetingFormcomponent {

  //property setting our FORM to not yet submitted
  submitted: boolean = false;
	//property representing an object of Client class
  model:Meeting;
  
  constructor(){
    //let model;
    
    this.model = new Meeting('Topic', 10, new Date());
  }
  /////////////////////////////////////////////
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }
  }


