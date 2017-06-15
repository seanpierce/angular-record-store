import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { AuthComponent }   from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'admin',
    component: AuthComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
