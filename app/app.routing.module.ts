import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';

import { CommonModule } from '@angular/common';
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: 'user/:id', component: UserComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
