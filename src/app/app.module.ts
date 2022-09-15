import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Componentes/alumno/alumno.component';
import { ListaAlumnoComponent } from './Componentes/lista-alumno/lista-alumno.component';
import { HistorialComponent } from './Componentes/historial/historial.component';
import { ListaHistorialComponent } from './Componentes/lista-historial/lista-historial.component';
import { FormularioAlumnoComponent } from './Componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './Componentes/formulario-seccion/formulario-seccion.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListaAlumnoComponent,
    HistorialComponent,
    ListaHistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
