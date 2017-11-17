import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { ANIMALS_API_URL_BASE, ANIMALS_API_PATH } from './animals.constants';

let x = ANIMALS_API_URL_BASE;

@Injectable()
export class AnimalsService {

  loading: boolean;

  constructor(
    private http: HttpClient,
    @Inject(ANIMALS_API_URL_BASE) private baseUrl: string,
    @Inject(ANIMALS_API_PATH) private apiPath: string
  ) { }

  getBreeds() {
    this.loading = true;
    return this.http.get<any>(this.baseUrl + this.apiPath + '/breeds/list')
      .pipe(
        tap(() => this.loading = false),
        map(ret => ret.message)
      );
  }

  getImage(breed: string) {
    this.loading = true;
    return this.http.get<any>(this.baseUrl + this.apiPath + '/breed/' + breed + '/images/random')
      .pipe(
        tap(() => this.loading = false),
        map(ret => ret.message)
      );
  }
}
