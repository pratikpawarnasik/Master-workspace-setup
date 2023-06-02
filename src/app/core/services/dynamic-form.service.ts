import { Injectable } from '@angular/core';

@Injectable()
export class DynamicFormService {
  generateForm(form: any, formData: any): string {
    console.log("form::",form);
    console.log("formData:::",formData);

    let formHtml = `
    <form [formGroup]="${form}" (submit)="onSubmit($event)">
    `;

    formData.fields.forEach((field: any) => {
      formHtml += `
        <div>
          <label>${field.label}</label>
    `;
      switch (field.type) {
        case 'select':
          formHtml += `
          <select [formControlName]="${field.name}" ${field.required ? 'required' : ''}>
        `;

          field.options.forEach((option: string) => {
            formHtml += `
              <option [value]="${option}">${option}</option>
            `;
          });

          formHtml += `
          </select>
        `;
          break;
        case 'text':
        case 'email':
          formHtml += `
          <input [type]="${field.type}" [formControlName]="${field.name}">
          `;
          break;
        case 'textarea':
          formHtml += `
          <textarea id="textarea-${field.name}" name="${field.name}" rows="4" cols="50" ${field.required ? 'required' : ''}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          </textarea>
         
        `;
          break;
        default:
          break;
      }


      formHtml += `
        <div *ngIf="${form}.get('${field.name}')?.invalid && (${form}.get('${field.name}')?.touched || ${form}.submitted)">
          <span *ngIf="${form}.get('${field.name}')?.errors?.required">This field is required</span>
        </div>
      </div>
      `;

    });
    formHtml += `
    <button type="submit">Submit</button>
    </form>
  `;

    return formHtml;
  }

  onSubmit(event: Event) {
    console.log('Form submitted!');
    console.warn('Your order has been submitted', event);
  }
}
