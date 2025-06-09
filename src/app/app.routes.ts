import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/menu.component').then((c) => c.MenuComponent),
    data: {
      title: 'Menu',
      description: 'Main menu of the application',
      keywords: 'menu, application',
    },
  },
  {
    path: 'duelo-por-nombre',
    loadComponent: () =>
      import('./features/duel-by-name/duel-by-name.component').then((c) => c.DuelByNameComponent),
    data: {
      title: 'Duel by Name',
      description: 'Duel by Name feature of the application',
      keywords: 'duel, name, application',
    },
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
];
