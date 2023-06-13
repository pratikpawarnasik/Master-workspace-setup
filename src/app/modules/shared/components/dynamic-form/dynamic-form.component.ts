import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
// import formJson from '../../../../core/data/user.json';
@Component({
  // selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  constructor(private http: HttpClient,
    private sharedService: SharedService) { }
  formData: any;
  selectedLanguage = localStorage.getItem('selectedLanguage') || 'EN';

  ngOnInit(): void {
    this.sharedService.languageChange.subscribe((language: string) => {
      this.selectedLanguage = language;
      // Handle the language change logic here
      console.log("language changed to ", language);
      this.fetchFormData(this.selectedLanguage);
    });
    this.fetchFormData(this.selectedLanguage);
  }
  fetchFormData(_val: string): Promise<void> {
    console.log(_val);
    
    return new Promise<void>((resolve, reject) => {
      this.http.get<any>('/assets/user-'+_val+'.json').subscribe(
        (data) => {
          this.formData = data;
          resolve();
        },
        (error) => {
          console.error('Failed to fetch form data:', error);
          reject();
        }
      );
    });
  }

  onRadioButtonChange(language: string) {
    alert(language);
    // Update the selectedLanguage variable and store it in local storage
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', this.selectedLanguage);

    // Perform any other actions based on the selected language
  }

  handleFormSubmitted(response: any) {
    let storedFormData = localStorage.getItem('formData');
    let formDataArray = storedFormData ? JSON.parse(storedFormData) : [];

    // Push the new form data object into the array
    formDataArray.push(response);

    // Convert the updated form data array to a JSON string
    const updatedFormDataJson = JSON.stringify(formDataArray);

    // Save the updated form data array in the local storage
    localStorage.setItem('formData', updatedFormDataJson);

    // // Verify the updated JSON data
    console.log('Updated JSON data:', updatedFormDataJson);
  }


}
