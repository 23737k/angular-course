import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormularioMateriasComponent } from './formulario-materias/formulario-materias.component';
import { FormsModule } from '@angular/forms';
import { AlertService } from './service/alert/alert.service';
import { EstudianteService } from './service/estudiante/estudiante.service';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';

//Definimos las rutas
const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'estudiantes', component:EstudiantesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EstudiantesComponent,
    FormularioMateriasComponent,
    HomeComponent,
    ContactoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //importar RouterModule e indicarle que rutas debe usar
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AlertService, EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
