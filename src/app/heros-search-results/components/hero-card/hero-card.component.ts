import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';

@Component({
  selector: 'hse-hero-card',
  templateUrl: './hero-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent {
  @Input() hero: Hero;
}
