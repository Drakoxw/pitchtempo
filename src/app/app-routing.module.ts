import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CardFullComponent } from './card-full/card-full.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardianService } from './login/login-guardian.service';
import { LoginComponent } from './login/login.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'tienda', component:TiendaComponent},
  {path:'login', component:LoginComponent},
  {path:'servicio-tecnico', component:TecnicoComponent},
  {path:'admin', component:AdminComponent,canActivate:[LoginGuardianService]},
  {path:'card/:id', component:CardFullComponent},
  {path:'**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
