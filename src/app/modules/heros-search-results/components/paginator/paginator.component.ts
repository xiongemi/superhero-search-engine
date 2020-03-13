import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store, Actions } from '@ngxs/store';
import { ChangePageAction } from '../../store/heros-search-results.actions';
import { Observable } from 'rxjs';
import { getPageIndex, getPageSize } from '../../store/heros-search-results.selectors';

@Component({
  selector: 'hse-heros-paginator',
  templateUrl: './paginator.component.html'
})
export class HerosPaginatorComponent implements OnInit {
  @Input() length;
  pageSize$: Observable<number>;
  pageIndex$: Observable<number>;

  constructor(private store: Store, private actions: Actions) {}

  ngOnInit() {
    this.pageIndex$ = this.store.select(getPageIndex);
    this.pageSize$ = this.store.select(getPageSize);
  }

  pageChanged(pageEvent: PageEvent) {
    this.store.dispatch(new ChangePageAction(pageEvent));
  }
}
