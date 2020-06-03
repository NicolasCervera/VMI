import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { CompLoginComponent } from './componentes/comp-login/comp-login.component';
import { CompInicioComponent } from './componentes/comp-inicio/comp-inicio.component';
import { CompDenunciaComponent } from './componentes/usuario-comun/comp-denuncia/comp-denuncia.component';
import { CompMultaComponent } from './componentes/usuario-policia/comp-multa/comp-multa.component';
import { CompCargosMultasComponent } from './componentes/usuario-policia/comp-cargos-multas/comp-cargos-multas.component';
import { CompAntecedentesComponent } from './componentes/usuario-policia/estadisticas/comp-antecedentes/comp-antecedentes.component';
import { CompMapaEstacionamientosComponent } from './componentes/usuario-comun/comp-mapa-estacionamientos/comp-mapa-estacionamientos.component';
import { CompLeyesTransitoComponent } from './componentes/usuario-comun/comp-leyes-transito/comp-leyes-transito.component';
import { CompNosotrosComponent } from './componentes/comp-nosotros/comp-nosotros.component';
import { CompContactoComponent } from './componentes/comp-contacto/comp-contacto.component';
import { CompPoliticasComponent } from './componentes/comp-politicas/comp-politicas.component';

const app_routes: Routes=[
    {path: 'inicio', component: CompInicioComponent },
    {path: 'nosotros', component: CompNosotrosComponent },
    {path: 'mapa', component: CompMapaEstacionamientosComponent },
    {path: 'contacto', component: CompContactoComponent },
    {path: 'políticas', component: CompPoliticasComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const app_routing = RouterModule.forRoot(app_routes);