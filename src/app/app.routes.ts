import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home'),
    title: 'Accueil | Portfolio'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects'),
    title: 'Projets | Portfolio'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about'),
    title: 'À propos | Portfolio'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact'),
    title: 'Contact | Portfolio'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
