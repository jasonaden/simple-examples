import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormValidationComponent } from './form-validation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'form-validation', component: FormValidationComponent}
    ])
  ],
  declarations: [FormValidationComponent]
})
export class FormValidationModule { }
