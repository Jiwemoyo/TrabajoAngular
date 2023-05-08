import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './error/error404/error404.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AboutComponent } from './web/about/about.component';
import { ContactComponent } from './web/contact/contact.component';
import { HomeComponent } from './web/home/home.component';

const routes: Routes = [
  //pages
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"",component:ProductComponent},
  ]},
  {path:"product",component:ProductComponent},
  {path:"category",component:CategoryComponent},
  //aut
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  //error
  {path:"error404",component:Error404Component},
  //Shared
  {path:"footer",component:FooterComponent},
  {path:"header",component:HeaderComponent},
  {path:"nav",component:NavComponent},
  {path:"sidebar",component:SidebarComponent},
  //Web
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
