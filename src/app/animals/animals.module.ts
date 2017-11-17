import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsService } from './animals.service';
import { ANIMALS_API_URL_BASE, ANIMALS_API_PATH } from './animals.constants';
import { AnimalsComponent } from './animals.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'animals', component: AnimalsComponent}
    ])
  ],
  providers: [AnimalsService],
  declarations: [AnimalsComponent]
})
export class AnimalsModule {

  static configure(apiUrlBase: string, apiPath: string): ModuleWithProviders {
    return {
      ngModule: AnimalsModule,
      providers: [
        {
          provide: ANIMALS_API_URL_BASE,
          useValue: apiUrlBase
        },
        {
          provide: ANIMALS_API_PATH,
          useValue: apiPath
        }
      ],
    };
  }
  
}
