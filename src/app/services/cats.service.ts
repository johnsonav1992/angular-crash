import { Injectable } from '@angular/core';

interface Cat {
  name: string;
  age: number;
  weight: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  cats: Cat[] = [
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
];

  constructor() { }

}
