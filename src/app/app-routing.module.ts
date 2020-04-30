import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainMenuComponent
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards-list/cards-list.module').then(m => m.CardsListModule)
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'tree',
    component: MainMenuComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
