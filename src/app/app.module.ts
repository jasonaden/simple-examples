import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnimalsModule } from './animals/animals.module';
import { LifecycleHooksModule } from './lifecycle-hooks/lifecycle-hooks.module';
import { FormValidationModule } from './form-validation/form-validation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AnimalsModule.configure('http://dog.ceo', '/api'),
    LifecycleHooksModule,
    FormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
