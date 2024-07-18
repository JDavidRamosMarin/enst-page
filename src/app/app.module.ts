import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UtilidadesModule } from './utilidades/utilidades.module';
import { NoticiasComponent } from './enst/paginas/noticias/noticias.component';
import { NosotrosComponent } from './enst/paginas/nosotros/nosotros.component';
import { OfertaEducativaComponent } from './enst/paginas/oferta-educativa/oferta-educativa.component';
import { DifusionCulturalComponent } from './enst/paginas/difusion-cultural/difusion-cultural.component';
import { InstalacionesComponent } from './enst/paginas/instalaciones/instalaciones.component';
import { AccesosComponent } from './enst/paginas/accesos/accesos.component';
import { TransparenciaComponent } from './enst/paginas/transparencia/transparencia.component';
import { NormatividadComponent } from './enst/paginas/normatividad/normatividad.component';


@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    NosotrosComponent,
    OfertaEducativaComponent,
    DifusionCulturalComponent,
    InstalacionesComponent,
    AccesosComponent,
    TransparenciaComponent,
    NormatividadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
