import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('@wp-chunk/web-standalone/feature-home').then(m => m.HomeComponent) },
  {
    path: 'register',
    loadComponent: () => import('@wp-chunk/web-standalone/feature-register').then(m => m.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@wp-chunk/web-standalone/feature-login').then(m => m.LoginComponent),
  },
  {
    path: 'setting',
    loadComponent: () => import('@wp-chunk/web-standalone/feature-setting').then(m => m.SettingComponent),
  },
];
