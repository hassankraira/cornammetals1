import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ButtomComponent } from './buttom/buttom.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', redirectTo: 'Home', pathMatch: 'full' },
  { path: '\Home', redirectTo: 'Home', pathMatch: 'full' },

  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'Services', component: ServicesComponent, title: 'services' },
  { path: 'AboutUs', component: AboutUsComponent, title: 'AboutUs' },
  { path: 'Contact', component: ContactComponent, title: 'Contact' },
  {path:"**" , redirectTo:"Home" ,pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    ButtomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
