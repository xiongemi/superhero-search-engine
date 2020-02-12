import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'hse-heros-list',
  templateUrl: './heros-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosListComponent {
  @Input() heros: Hero[];
  @Input() herosLength: number;

  changePage(pageEvent: PageEvent) {

  }
}
