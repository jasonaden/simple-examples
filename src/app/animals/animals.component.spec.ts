import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AnimalsComponent } from './animals.component';
import { AnimalsService } from './animals.service';
import { ANIMALS_API_URL_BASE, ANIMALS_API_PATH } from './animals.constants';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('AnimalsComponent', () => {
  let component: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        AnimalsService,
        {provide: ANIMALS_API_URL_BASE, useValue: 'base/'},
        {provide: ANIMALS_API_PATH, useValue: 'api'}
      ],
      imports: [HttpClientTestingModule],
      declarations: [ AnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request animals', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
    

    const req = httpMock.expectOne('base/api/breeds/list');
    
    // Next, fulfill the request by transmitting a response.
    req.flush({message: ['akita', 'beagle']});

    // verify that the component has the expected values
    expect(component.animals).toEqual(['akita', 'beagle']);

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
  }));
});
