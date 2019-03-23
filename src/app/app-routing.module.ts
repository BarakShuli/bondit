import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { MainComponent } from './site/protfolio/main/main.component';
import { APIResolver } from './site/protfolio/main/protfolios.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'protfolios',
    component: MainComponent,
    resolve: { protfoliosList: APIResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
