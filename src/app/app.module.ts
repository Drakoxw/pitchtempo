import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { AdminComponent } from './admin/admin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFullComponent } from './card-full/card-full.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuHComponent } from './menu-h/menu-h.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { TiendaComponent } from './tienda/tienda.component';
import { LoginComponent } from './login/login.component';
import { XAccesoriosComponent } from './x-accesorios/x-accesorios.component';
import { XCablesFactComponent } from './x-cables-fact/x-cables-fact.component';
import { XCoversComponent } from './x-covers/x-covers.component';
import { XDanoMantenimComponent } from './x-dano-mantenim/x-dano-mantenim.component';
import { XImportTarjetasComponent } from './x-import-tarjetas/x-import-tarjetas.component';
import { XNuevosUsadosComponent } from './x-nuevos-usados/x-nuevos-usados.component';
import { XPicthPulsadComponent } from './x-picth-pulsad/x-picth-pulsad.component';
import { XSkinEquiposComponent } from './x-skin-equipos/x-skin-equipos.component';
import { XBasesLaptopComponent } from './x-bases-laptop/x-bases-laptop.component';
import { XAudifonosComponent } from './x-audifonos/x-audifonos.component';
import { TiendaPrincipalComponent } from './tienda-principal/tienda-principal.component';
import { MinRefCardComponent } from './min-ref-card/min-ref-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavBarComponent,
    TiendaComponent,
    FooterComponent,
    MenuHComponent,
    TecnicoComponent,
    CardFullComponent,
    CardsComponent,
    LoginComponent,
    XAccesoriosComponent,
    XCablesFactComponent,
    XCoversComponent,
    XDanoMantenimComponent,
    XImportTarjetasComponent,
    XNuevosUsadosComponent,
    XPicthPulsadComponent,
    XSkinEquiposComponent,
    XBasesLaptopComponent,
    XAudifonosComponent,
    TiendaPrincipalComponent,
    MinRefCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
