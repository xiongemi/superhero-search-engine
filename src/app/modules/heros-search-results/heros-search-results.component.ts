import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { GetSuperheros } from '../../store/heros/heros.actions';
import { Observable, Subscription } from 'rxjs';
import { Hero } from '../../types/hero.interface';
import { getHerosLength, getFilteredHerosOnPage } from '../../store/heros/heros.selectors';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';
import { transformsQueryMapToFormValues } from '../../shared/services/hero.helpers';
import { getHerosSearchFormValue } from '../hero-search-form/store/heros-search-form.selectors';
import { distinctUntilChanged } from 'rxjs/operators';
import { GoBackToFirstPage } from './store/heros-search-results.actions';

@Component({
  selector: 'hse-heros-search-results',
  templateUrl: './heros-search-results.component.html',
  host: { class: 'w-100 flex flex-column justify-center' }
})
export class HerosSearchResultsComponent implements OnInit {
  heros$: Observable<Hero[]>;
  herosLength$: Observable<number>;
  formValue: HerosSearchFormValueModel;

  private subscription = new Subscription();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const formValueParamMap = this.route.snapshot.paramMap;
    this.formValue = transformsQueryMapToFormValues(formValueParamMap);
    this.store.dispatch(new GetSuperheros());
    this.heros$ = this.store.select(getFilteredHerosOnPage);
    this.herosLength$ = this.store.select(getHerosLength);

    this.subscription.add(
      this.store
        .select(getHerosSearchFormValue)
        .pipe(distinctUntilChanged())
        .subscribe(() => {
          this.store.dispatch(new GoBackToFirstPage());
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
