import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
    @Input({transform: (value: string) => { console.log(value); return value + ' dude' }}) something!: string;
    @Output() somethingElse = new EventEmitter<string>();

    constructor(public catsService: CatsService) { }

    ngOnInit(): void {
      this.catsService.cats.subscribe(cats => {
        console.log(cats)
      })
      this.somethingElse.emit('suppppp')
    }
}
