import { OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';
import { Gender } from '../types/gender.enum';
import { Race } from '../types/race.enum';
import { Alignment } from '../types/alignment.enum';
import { HerosSearchFormValueModel } from './types/heros-search-form-value-model.interface';

@Component({
  selector: 'hse-heros-search-form',
  templateUrl: './heros-search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosSearchFormComponent implements OnInit {
  @Input() formValue: HerosSearchFormValueModel;
  @Output() submitted = new EventEmitter<void>();
  Gender = Gender;
  Race = Race;
  Alignment = Alignment;

  searchForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    race: new FormControl(''),
    alignment: new FormControl('')
  });

  ngOnInit() {
    if (this.formValue) {
      this.searchForm.patchValue(this.formValue);
    }
  }

  get tags() {
    return [
      this.searchForm.value.gender,
      this.searchForm.value.race,
      this.searchForm.value.alignment
    ].filter(Boolean);
  }

  get tagsDescription() {
    if (this.tags.length > 2) {
      return this.tags.slice(0, 2).join(', ') + '...';
    }
    return this.tags.join(', ');
  }

  onSubmit() {
    if (Object.values(this.searchForm.value).some(Boolean)) {
      this.submitted.emit();
    }
  }

  onResetFilterTags() {
    ['gender', 'race', 'alignment'].forEach(key => {
      this.searchForm.get(key).reset();
    });
  }
}
