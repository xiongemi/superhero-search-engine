import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Actions } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { GetSuperheros } from '../../store/heros/heros.actions';
import { Observable, Subscription } from 'rxjs';
import { Hero } from '../../types/hero.interface';
import {
  getHerosLength,
  getFilteredHerosOnPage,
  isHerosLoaded
} from '../../store/heros/heros.selectors';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';
import { transformsQueryMapToFormValues } from '../../shared/services/hero.helpers';
import { getHerosSearchFormValue } from '../hero-search-form/store/heros-search-form.selectors';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { GoBackToFirstPage } from './store/heros-search-results.actions';
import { UpdateFormValue } from '@ngxs/form-plugin';

@Component({
  selector: 'hse-heros-search-results',
  templateUrl: './heros-search-results.component.html',
  host: { class: 'w-100 flex flex-column justify-center' }
})
export class HerosSearchResultsComponent implements OnInit, OnDestroy {
  heros$: Observable<Hero[]>;
  herosLength$: Observable<number>;
  showSpinner$: Observable<boolean>;

  private subscription = new Subscription();

  constructor(private store: Store, private route: ActivatedRoute, private actions: Actions) {}

  ngOnInit() {
    if (!this.store.selectSnapshot(getHerosSearchFormValue)) {
      const formValueParamMap = this.route.snapshot.paramMap;
      const formValue = transformsQueryMapToFormValues(formValueParamMap);
      this.store.dispatch(new UpdateFormValue({ value: formValue, path: 'herosSearchForm' }));
    }

    this.store.dispatch(new GetSuperheros());
    this.heros$ = this.store.select(getFilteredHerosOnPage);
    this.herosLength$ = this.store.select(getHerosLength);
    this.showSpinner$ = this.store.select(isHerosLoaded);

    this.subscription.add(
      this.store
        .select(getHerosSearchFormValue)
        .pipe(
          debounceTime(200),
          distinctUntilChanged((form1, form2) => JSON.stringify(form1) === JSON.stringify(form2))
        )
        .subscribe(() => {
          this.store.dispatch(new GoBackToFirstPage());
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
