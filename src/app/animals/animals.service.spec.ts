import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AnimalsService } from './animals.service';
import { ANIMALS_API_URL_BASE, ANIMALS_API_PATH } from './animals.constants';

describe('AnimalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AnimalsService,
        {provide: ANIMALS_API_URL_BASE, useValue: 'base/'},
        {provide: ANIMALS_API_PATH, useValue: 'api'}
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([AnimalsService], (service: AnimalsService) => {
    expect(service).toBeTruthy();
  }));
});
