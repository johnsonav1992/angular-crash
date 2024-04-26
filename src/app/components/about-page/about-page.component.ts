import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CatsService, DogResponse } from 'src/app/services/cats.service';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
    poop = 'stinky';
    notherFetch$ = this.http
      .get<DogResponse>('https://dog.ceo/api/breeds/image/random')

    constructor(public catsService: CatsService, private http: HttpClient) { }

    ngOnInit(): void {
      this.poop = 'poopy'
    }

    changeNames(e: MouseEvent) {
      this.catsService.cats.next([{name: 'Broham', age: 1, weight: 3}])
    }

    handleOutput(e: string) {
      this.poop = e
    }

}
