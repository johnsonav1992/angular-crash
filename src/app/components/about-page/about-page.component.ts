import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
    poop = 'stinky';

    constructor(public catsService: CatsService) { }

    ngOnInit(): void {
      this.poop = 'poopy'
    }

    changeNames(e: MouseEvent) {
      this.catsService.cats[0].name = 'Bob'
    }

}
