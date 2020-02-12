import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class MaterialModule { }
