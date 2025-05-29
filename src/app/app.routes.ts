import { Routes } from '@angular/router';

import ContainerComponent from './features/layouts/container/container.component';

export const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        loadComponent: () => import('./features/main/basic-operation/basic-operation.component').then(c => c.default),
        path: "heroes",
        title: "Basic page",
      },
      {
        loadComponent: () => import('./features/components/hero-detail/hero-detail.component').then(c => c.default),
        path: "heroes/hero/:id",
        title: "hero-detail",
      },
      { path: "**", redirectTo: "heroes", pathMatch: 'full' },
    ]
  },
];
