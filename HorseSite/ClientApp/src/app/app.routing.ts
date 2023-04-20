import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  CounterComponent,
  FetchDataComponent,
} from './components';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
