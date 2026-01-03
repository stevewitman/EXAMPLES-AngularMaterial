import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./examples/home/home').then((mod) => mod.Home),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./examples/tabs/tabs').then((mod) => mod.Tabs),
  },
  {
    path: 'tabs-nested',
    loadComponent: () => import('./examples/tabs-nested/tabs-nested').then((mod) => mod.TabsNested),
  },
  {
    path: 'accordian',
    loadComponent: () => import('./examples/accordian/accordian').then((mod) => mod.Accordian),
  },
  {
    path: 'autocomplete',
    loadComponent: () => import('./examples/autocomplete/autocomplete').then((mod) => mod.Autocomplete),
  },
  {
    path: 'read-buildings',
    loadComponent: () => import('./examples/read-buildings/read-buildings').then((mod) => mod.ReadBuildings),
  },
];
