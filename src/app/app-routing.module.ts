import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-components/home/home.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from "@auth0/auth0-angular";


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "qup", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "gamerslist", component: ProfileListComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
