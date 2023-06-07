import { FormGroup, FormControl, Validators } from '@angular/forms';

// export function createDynamicForm(formData: any): FormGroup {
//     const formGroup: { [key: string]: FormControl } = {};

//   formData.fields.forEach((field: { required: any; name: string | number; }) => {
//     const validators = field.required ? Validators.required : null;
//     formGroup[field.name] = new FormControl('', validators);
//   });

//   return new FormGroup(formGroup);
// }

// export function createDynamicForm(formData: any): FormGroup {
//   const formGroup: { [key: string]: FormControl } = {};

//   formData.formGroups.forEach((group: { fields: any[] }) => {
//     group.fields.forEach((field: { required: any; name: string | number }) => {
//       const validators = field.required ? Validators.required : null;
//       formGroup[field.name] = new FormControl('', validators);
//     });
//   });

//   return new FormGroup(formGroup);
// }
