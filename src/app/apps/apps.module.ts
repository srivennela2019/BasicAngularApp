import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppsComponent } from "./apps/apps.component";
import { SharedModule } from '../shared/shared.module';
import { AppsPipe } from "./apps.pipe";
import { RatingComponent } from "./rating/rating.component";
import { DetailComponent } from "./detail/detail.component";
import { AuthGuard } from "../auth/auth.guard";
@NgModule({
  declarations: [
    AppsComponent,
    AppsPipe,
    RatingComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: "", component: AppsComponent, canActivate: [AuthGuard] },
      {
        path: "/details/:pid",
        component: DetailComponent,
        canActivate: [AuthGuard]
      }
    ])
  ]
})
export class AppsModule { }
