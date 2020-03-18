import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';

@Component({
  selector: 'hse-heros-list',
  templateUrl: './heros-list.component.html'
})
export class HerosListComponent {
  @Input() heros: Hero[];
  @Input() herosLength: number;
}
