import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileModule { }
