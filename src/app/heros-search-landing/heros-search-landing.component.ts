import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { getHerosSearchFormValue } from '../hero-search-form/store/heros-search-form.selectors';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';

@Component({
  selector: 'hse-heros-search-landing',
  templateUrl: './heros-search-landing.component.html',
  host: { class: 'flex flex-column items-center' }
})
export class HerosSearchLandingComponent {
  constructor(private store: Store, private router: Router) {}

  submitForm() {
    const formValue = this.store.selectSnapshot<HerosSearchFormValueModel>(getHerosSearchFormValue);
    this.router.navigate(['/search', formValue]);
  }
}
