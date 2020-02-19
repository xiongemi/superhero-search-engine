import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { GetSuperheros } from '../store/heros/heros.actions';
import { Observable } from 'rxjs';
import { Hero } from '../types/hero.interface';
import {
  getHeros,
  getFilteredHeros,
  getHerosLength,
  getFilteredHerosOnPage
} from '../store/heros/heros.selectors';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';
import { Gender } from '../types/gender.enum';
import { Race } from '../types/race.enum';
import { Alignment } from '../types/alignment.enum';
import { transformsQueryMapToFormValues } from '../shared/hero.helpers';

@Component({
  selector: 'hse-heros-search-results',
  templateUrl: './heros-search-results.component.html',
  host: { class: 'w-100 flex flex-column justify-center' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosSearchResultsComponent implements OnInit {
  heros$: Observable<Hero[]>;
  herosLength$: Observable<number>;
  formValue: HerosSearchFormValueModel;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const formValueParamMap = this.route.snapshot.paramMap;
    this.formValue = transformsQueryMapToFormValues(formValueParamMap);
    this.store.dispatch(new GetSuperheros());
    this.heros$ = this.store.select(getFilteredHerosOnPage);
    this.herosLength$ = this.store.select(getHerosLength);
  }
}
