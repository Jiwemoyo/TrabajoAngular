import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { SharedComponent } from './shared/shared.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './web/about/about.component';
import { ContactComponent } from './web/contact/contact.component';
import { HomeComponent } from './web/home/home.component';
import { Error404Component } from './error/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    SharedComponent,
    PagesComponent,
    AuthComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    ErrorComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
