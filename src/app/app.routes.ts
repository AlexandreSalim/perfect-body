import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'masculino',
    loadComponent: () => import('./masculino/masculino.page').then( m => m.MasculinoPage)
  },
  {
    path: 'feminino',
    loadComponent: () => import('./feminino/feminino.page').then( m => m.FemininoPage)
  },
];
