import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./misc/welcome/welcome.component";
import { AuthService } from "./auth/auth.service";
import { LoginComponent } from "./auth/login/login.component";
import { NavbarComponent } from "./misc/navbar/navbar.component";
import { TemplateComponent } from "./validation/template/template.component";
import { ReactiveComponent } from "./validation/reactive/reactive.component";
import { InterceptorService } from "./auth/interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JQ_TOKEN } from "./plugins/jquery.service";
let jQuery = window["jQuery"];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavbarComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [AppComponent] // Bootstrapping our application
})
export class AppModule {}
