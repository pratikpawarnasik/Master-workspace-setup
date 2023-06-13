import { Component, OnInit } from '@angular/core';
import formJson from '../../../../core/data/formValue.json';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
  export class SharedComponent implements OnInit{
    constructor(private http: HttpClient) {}
    formData: any;
  
    ngOnInit(): void {
      this.fetchFormData();
    }
    fetchFormData() {
      this.http.get<any>('/assets/user.json').subscribe(
        (data) => {
          this.formData = data;
          console.log(this.formData);
          
        },
        (error) => {
          console.error('Failed to fetch form data:', error);
        }
      );
    }

  handleFormSubmitted(response: any) {
    // Handle the form submit response here
    console.log('Form submit response:', response);
  }
}
