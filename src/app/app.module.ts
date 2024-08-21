import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormularioMateriasComponent } from './formulario-materias/formulario-materias.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from './service/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EstudiantesComponent,
    FormularioMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
