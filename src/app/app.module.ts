import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './ui/utils/input/input.component';
import { ButtonComponent } from './ui/utils/button/button.component';
import { AppLayoutComponent } from './ui/layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './ui/layouts/auth-layout/auth-layout.component';
import { FormsComponent } from './ui/forms/forms.component';
import { ProductComponent } from './components/product/product.component';
// import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    InputComponent,
    ButtonComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    FormsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
