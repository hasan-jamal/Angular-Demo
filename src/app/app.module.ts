import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { PrivecyComponent } from './components/privecy/privecy.component';
import { TheUseComponent } from './components/the-use/the-use.component';
import { PricesComponent } from './components/prices/prices.component';
import { StoresComponent } from './components/stores/stores.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignComponent } from './components/sign/sign.component';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavHeaderComponent,
    FooterPageComponent,
    PrivecyComponent,
    TheUseComponent,
    PricesComponent,
    StoresComponent,
    SignInComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
