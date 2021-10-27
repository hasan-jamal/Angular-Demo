import { SignInComponent } from './components/sign-in/sign-in.component';
import { StoresComponent } from './components/stores/stores.component';
import { TheUseComponent } from './components/the-use/the-use.component';
import { PrivecyComponent } from './components/privecy/privecy.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'privecy', component: PrivecyComponent},
  {path: 'theUse', component: TheUseComponent},
  {path: 'prices' , component: PricesComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'signUp' , component: SignInComponent},
  {path: 'signIn' , component: SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
