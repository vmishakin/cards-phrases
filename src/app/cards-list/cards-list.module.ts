import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list.component';
import { CardComponent } from '../card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

const cardsRoutes: Routes = [
  {
    path: '',
    component: CardsListComponent,
  }
];


@NgModule({
  declarations: [
    CardsListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cardsRoutes),
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class CardsListModule { }
