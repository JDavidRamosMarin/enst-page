import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './enst/paginas/noticias/noticias.component';
import { NosotrosComponent } from './enst/paginas/nosotros/nosotros.component';
import { OfertaEducativaComponent } from './enst/paginas/oferta-educativa/oferta-educativa.component';
import { DifusionCulturalComponent } from './enst/paginas/difusion-cultural/difusion-cultural.component';
import { InstalacionesComponent } from './enst/paginas/instalaciones/instalaciones.component';
import { TransparenciaComponent } from './enst/paginas/transparencia/transparencia.component';
import { AccesosComponent } from './enst/paginas/accesos/accesos.component';
import { NormatividadComponent } from './enst/paginas/normatividad/normatividad.component';

const routes: Routes = [
  {path:'noticias', component: NoticiasComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'oferta-educativa', component: OfertaEducativaComponent},
  {path:'difusion-cultural', component: DifusionCulturalComponent},
  {path:'instalaciones', component: InstalacionesComponent},
  {path:'accesos', component: AccesosComponent},
  {path:'transparencia', component: TransparenciaComponent},
  {path:'normatividad', component: NormatividadComponent},
  {path:'**', redirectTo: 'noticias'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
