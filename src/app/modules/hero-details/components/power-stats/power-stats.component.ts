import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';

@Component({
  selector: 'hse-power-stats',
  templateUrl: './power-stats.component.html',
  styleUrls: ['./power-stats.component.css']
})
export class PowerStatsComponent {
  @Input() hero: Hero;
}
