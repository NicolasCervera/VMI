import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { CompLoginComponent } from './componentes/comp-login/comp-login.component';
import { CompInicioComponent } from './componentes/comp-inicio/comp-inicio.component';
import { CompDenunciaComponent } from './componentes/usuario-comun/comp-denuncia/comp-denuncia.component';
import { CompMultaComponent } from './componentes/usuario-policia/comp-multa/comp-multa.component';
import { CompCargosMultasComponent } from './componentes/usuario-policia/comp-cargos-multas/comp-cargos-multas.component';
import { CompAntecedentesComponent } from './componentes/usuario-policia/estadisticas/comp-antecedentes/comp-antecedentes.component';
import { CompMapaEstacionamientosComponent } from './componentes/usuario-comun/comp-mapa-estacionamientos/comp-mapa-estacionamientos.component';
import { CompLeyesTransitoComponent } from './componentes/usuario-comun/comp-leyes-transito/comp-leyes-transito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MainNavComponent } from './componentes/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CompNosotrosComponent } from './componentes/comp-nosotros/comp-nosotros.component';
import { CompContactoComponent } from './componentes/comp-contacto/comp-contacto.component';
import { CompFooterComponent } from './componentes/comp-footer/comp-footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CompPoliticasComponent } from './componentes/comp-politicas/comp-politicas.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    CompLoginComponent,
    CompInicioComponent,
    CompDenunciaComponent,
    CompMultaComponent,
    CompCargosMultasComponent,
    CompAntecedentesComponent,
    CompMapaEstacionamientosComponent,
    CompLeyesTransitoComponent,
    MainNavComponent,
    CompNosotrosComponent,
    CompContactoComponent,
    CompFooterComponent,
    CompPoliticasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
