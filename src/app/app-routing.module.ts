import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CardFullComponent } from './pages/card-full/card-full.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginGuardianService } from './pages/login/login-guardian.service';
import { LoginComponent } from './pages/login/login.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { TiendaPrincipalComponent } from './pages/tienda-principal/tienda-principal.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { XAccesoriosComponent } from './content/x-accesorios/x-accesorios.component';
import { XAudifonosComponent } from './content/x-audifonos/x-audifonos.component';
import { XBasesLaptopComponent } from './content/x-bases-laptop/x-bases-laptop.component';
import { XCablesFactComponent } from './content/x-cables-fact/x-cables-fact.component';
import { XCoversComponent } from './content/x-covers/x-covers.component';
import { XImportTarjetasComponent } from './content/x-import-tarjetas/x-import-tarjetas.component';
import { XNuevosUsadosComponent } from './content/x-nuevos-usados/x-nuevos-usados.component';
import { XPicthPulsadComponent } from './content/x-picth-pulsad/x-picth-pulsad.component';
import { XSkinEquiposComponent } from './content/x-skin-equipos/x-skin-equipos.component';

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
