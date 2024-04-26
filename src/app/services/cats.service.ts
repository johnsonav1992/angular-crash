import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

interface Cat {
  name: string;
  age: number;
  weight: number;
}

export type DogResponse = {
  message?: string,
  status?: string
}

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  cats = new BehaviorSubject<Cat[]>( [
      {
        name: 'Mittens',
        age: 2,
        weight: 5
      },
      {
        name: 'Fluffy',
        age: 1,
        weight: 3
      }
  ]);

  dog?: DogResponse;
  dogFetch$ = this.http
    .get<DogResponse>('https://dog.ceo/api/breeds/image/random')
    .pipe(take(1))

  constructor(private http: HttpClient) { }

}
