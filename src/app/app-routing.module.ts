import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistryHomeComponent } from './components/registry/registry-home.component';
import { RegistryFormComponent } from './components/registry/form/registry-form.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundComponent } from './components/not-found/not-found.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { AboutComponent } from './components/about/about.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registry-home',
    component: RegistryHomeComponent,
  },
  {
    path: 'registry-form',
    component: RegistryFormComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },

  {
    path: 'home-user',
    component: HomeUserComponent
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotfoundComponent
  },

  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
