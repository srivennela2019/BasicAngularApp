import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppsComponent } from "./apps/apps/apps.component";
import { DetailComponent } from "./apps/detail/detail.component";
import { AuthGuard } from "./auth/auth.guard";
import { WelcomeComponent } from "src/app/misc/welcome/welcome.component";
import { LoginComponent } from "./auth/login/login.component";
import { TemplateComponent } from "src/app/validation/template/template.component";
import { ReactiveComponent } from "src/app/validation/reactive/reactive.component";

const routes: Routes = [
  {path:"products" ,loadChildren:'./apps/apps.module#AppsModule'},//implementing lazy loading
  { path: "welcome", component: WelcomeComponent },
  { path: "login", component: LoginComponent },
  { path: "template", component: TemplateComponent },
  { path: "reactive", component: ReactiveComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" }, // path match matches the exact path given
  { path: "**", redirectTo: "welcome" } //** is wild card to handle wrong paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // implements all routes
  exports: [RouterModule]
})
export class AppRoutingModule {}
