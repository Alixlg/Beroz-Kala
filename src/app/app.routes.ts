import { Routes } from '@angular/router';
import { PublicNavigationsComponent } from './+navigations/public-navigations/ui/public-navigations.component';
import { PrivateNavigationsComponent } from './+navigations/private-navigations/ui/private-navigations.component';
import { ProductsComponent } from './+pages/+public/products/ui/products.component';
import { BasketComponent } from './+pages/+public/basket/ui/basket.component';
import { LoginComponent } from './+pages/+public/login/ui/login.component';
import { ManageProductsComponent } from './+pages/+private/manage-products/ui/manage-products.component';
import { ManageMembersComponent } from './+pages/+private/manage-members/ui/manage-members.component';
import { AboutComponent } from './+pages/+public/about/ui/about.component';
import { SupportComponent } from './+pages/+public/support/ui/support.component';
import { HomeComponent } from './+pages/+public/home/ui/home.component';

export const routes: Routes = [
  {
    path: 'pb', component: PublicNavigationsComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'support', component: SupportComponent },
      { path: 'about', component: AboutComponent },
      { path: 'basket', component: BasketComponent },
      { path: '', redirectTo: 'products', pathMatch: 'prefix' }
    ]
  },
  {
    path: 'pr', component: PrivateNavigationsComponent, children: [
      { path: 'manage-products', component: ManageProductsComponent },
      { path: 'manage-members', component: ManageMembersComponent },
      { path: '', redirectTo: 'manage-products', pathMatch: 'prefix' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'pb', pathMatch: 'full' }
];
