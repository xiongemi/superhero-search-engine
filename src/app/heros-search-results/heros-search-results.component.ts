import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { GetSuperheros } from '../store/heros/heros.actions';

@Component({
  selector: 'hse-heros-search-results',
  templateUrl: './heros-search-results.component.html',
  host: { class: 'w-100 flex justify-center' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosSearchResultsComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    const formValueParamMap = this.route.snapshot.paramMap;
    this.store.dispatch(new GetSuperheros());
  }
}
