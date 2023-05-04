import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  CounterComponent,
  FetchDataComponent,
  AddHorseComponent,
  HorseDetailsComponent,
} from './components';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'AddHorse/detailshorse/:id', component: HorseDetailsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'Profile', component: CounterComponent },
  { path: 'AddHorse', component: AddHorseComponent },
  { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(appRoutes);
