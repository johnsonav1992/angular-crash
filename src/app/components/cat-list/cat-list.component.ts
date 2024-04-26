import { Component, OnInit } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent {

    constructor(public catsService: CatsService) { }
}
