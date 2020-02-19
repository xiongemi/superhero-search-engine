import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';
import { getHeroAlignment } from 'src/app/shared/hero.helpers';

@Component({
  selector: 'hse-appearance-table',
  templateUrl: './appearance-table.component.html',
  styleUrls: ['./appearance-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppearanceTableComponent {
  @Input() hero: Hero;
  getHeroAlignment = getHeroAlignment;
}
