import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { AdminComponent } from './pages/admin/admin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFullComponent } from './pages/card-full/card-full.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuHComponent } from './components/menu-h/menu-h.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './pages/login/login.component';
import { XAccesoriosComponent } from './content/x-accesorios/x-accesorios.component';
import { XCablesFactComponent } from './content/x-cables-fact/x-cables-fact.component';
import { XCoversComponent } from './content/x-covers/x-covers.component';
import { XDanoMantenimComponent } from './content/x-dano-mantenim/x-dano-mantenim.component';
import { XImportTarjetasComponent } from './content/x-import-tarjetas/x-import-tarjetas.component';
import { XNuevosUsadosComponent } from './content/x-nuevos-usados/x-nuevos-usados.component';
import { XPicthPulsadComponent } from './content/x-picth-pulsad/x-picth-pulsad.component';
import { XSkinEquiposComponent } from './content/x-skin-equipos/x-skin-equipos.component';
import { XBasesLaptopComponent } from './content/x-bases-laptop/x-bases-laptop.component';
import { XAudifonosComponent } from './content/x-audifonos/x-audifonos.component';
import { TiendaPrincipalComponent } from './pages/tienda-principal/tienda-principal.component';
import { MinRefCardComponent } from './components/min-ref-card/min-ref-card.component';

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
