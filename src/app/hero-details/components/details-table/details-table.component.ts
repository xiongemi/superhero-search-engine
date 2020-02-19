import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';

@Component({
  selector: 'hse-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['././details-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTableComponent {
  @Input() hero: Hero;
}
