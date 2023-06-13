import { Component, OnInit } from '@angular/core';
import { TsiformComponent  } from 'tsiform';
// import formJson from '../../../../core/data/formValue.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // formData =formJson;
  ngOnInit(): void {
  }

  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }
}
