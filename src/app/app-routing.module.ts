import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { IntroComponent } from './home/intro/intro.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { BrandsComponent } from './home/brands/brands.component';
import { FilterComponent } from './products/filter/filter.component';
import { SearchComponent } from './products/search/search.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { GlobalComponent } from './global/global.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { SidebarComponent } from './global/sidebar/sidebar.component';
import { FooterComponent } from './global/footer/footer.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
 
 {path: "home", component:HomeComponent, children:[
    {path:"intro", component: IntroComponent}, 
    {path: "newsletter", component: NewsletterComponent},
    {path: "product", component: ProductComponent},
    {path: "brand", component: BrandsComponent}
 ]},
 {path: "products" ,component: ProductsComponent, children:[
    {path:"filter", component: FilterComponent},
    {path:"search", component:SearchComponent},
    {path:"product-list", component:ProductListComponent}
 ]},

 {path:"global", component: GlobalComponent, children: [
    {path: "navbar", component: NavbarComponent},
    {path:"sidebar", component: SidebarComponent},
    {path: "footer",component:FooterComponent}
 ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
