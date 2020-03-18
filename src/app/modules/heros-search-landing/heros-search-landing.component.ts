import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {
  getHerosSearchFormValue,
  isHerosSearchFormFilled
} from '../hero-search-form/store/heros-search-form.selectors';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';
import { getRandomHeroId } from 'src/app/store/heros/heros.selectors';
import { randomHeroDetailsActionCreator } from 'src/app/store/heros/heros.actions';

@Component({
  selector: 'hse-heros-search-landing',
  templateUrl: './heros-search-landing.component.html',
  host: { class: 'flex flex-column items-center' }
})
export class HerosSearchLandingComponent {
  constructor(private store: Store, private router: Router) {}

  submitForm() {
    if (this.store.selectSnapshot(isHerosSearchFormFilled)) {
      const formValue = this.store.selectSnapshot<HerosSearchFormValueModel>(
        getHerosSearchFormValue
      );
      this.router.navigate(['/search', formValue]);
    }
  }

  goToRandomHeorId() {
    const id = this.store.selectSnapshot(getRandomHeroId()) || Math.ceil(Math.random() * 562);
    this.store.dispatch(randomHeroDetailsActionCreator(id));
  }
}
