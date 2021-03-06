import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListPageComponent } from './list-page/list-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListDetailComponent } from './list-detail/list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPageComponent,
    LoginPageComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
