import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'lifecycle-hooks', component: LifecycleHooksComponent}
    ])
  ],
  declarations: [LifecycleHooksComponent]
})
export class LifecycleHooksModule { }
