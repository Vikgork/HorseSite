import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  CounterComponent,
  FetchDataComponent,
  AddHorseComponent,
} from './components';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Profile',component:CounterComponent},
      {path: 'AddHorse',component:AddHorseComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
