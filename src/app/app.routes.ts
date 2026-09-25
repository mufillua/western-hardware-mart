import { Routes } from '@angular/router';

/**
 * Only Home is wired up in Phase 1. Products, category, product-detail,
 * brands, about and contact routes are added as their pages are built
 * in later phases — adding the paths now without pages would just be
 * dead links.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Western Hardware Mart — Your Trusted Hydraulic Solutions Partner',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
    title: 'Products — Western Hardware Mart',
  },
  {
    path: 'products/:slug',
    loadComponent: () => import('./pages/product-detail/product-detail').then((m) => m.ProductDetail),
    title: 'Product — Western Hardware Mart',
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories').then((m) => m.Categories),
    title: 'Product Categories — Western Hardware Mart',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About Us — Western Hardware Mart',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact Us — Western Hardware Mart',
  },
  { path: '**', redirectTo: '' },
];
