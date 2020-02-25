import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'hse-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  showBackButton$: Observable<boolean>;

  constructor(private location: Location, store: Store) {
    this.showBackButton$ = store.select(state => {
      return state?.router?.state?.url !== '/';
    });
  }

  goBack() {
    this.location.back();
  }
}
