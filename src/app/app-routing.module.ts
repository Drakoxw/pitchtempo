import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CardFullComponent } from './card-full/card-full.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardianService } from './login/login-guardian.service';
import { LoginComponent } from './login/login.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { TiendaPrincipalComponent } from './tienda-principal/tienda-principal.component';
import { TiendaComponent } from './tienda/tienda.component';
import { XAccesoriosComponent } from './x-accesorios/x-accesorios.component';
import { XAudifonosComponent } from './x-audifonos/x-audifonos.component';
import { XBasesLaptopComponent } from './x-bases-laptop/x-bases-laptop.component';
import { XCablesFactComponent } from './x-cables-fact/x-cables-fact.component';
import { XCoversComponent } from './x-covers/x-covers.component';
import { XImportTarjetasComponent } from './x-import-tarjetas/x-import-tarjetas.component';
import { XNuevosUsadosComponent } from './x-nuevos-usados/x-nuevos-usados.component';
import { XPicthPulsadComponent } from './x-picth-pulsad/x-picth-pulsad.component';
import { XSkinEquiposComponent } from './x-skin-equipos/x-skin-equipos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tienda', component:TiendaPrincipalComponent},
  {path:'servicio-tecnico', component:TecnicoComponent},
  {path:'accesorios', component:XAccesoriosComponent},
  {path:'audifonos', component:XAudifonosComponent},
  {path:'bases-laptop', component:XBasesLaptopComponent},
  {path:'cables', component:XCablesFactComponent},
  {path:'cubiertas', component:XCoversComponent},
  {path:'venta', component:XNuevosUsadosComponent},
  {path:'importaciones', component:XImportTarjetasComponent},
  {path:'pulsadores', component:XPicthPulsadComponent},
  {path:'skins', component:XSkinEquiposComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent,canActivate:[LoginGuardianService]},
  {path:'card/:id', component:CardFullComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
