import { Injectable, OnInit } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import { AlertService } from '../alert/alert.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService{

  estudiantes:Estudiante[];

  constructor(private _alertService:AlertService, private _router:Router) {
    this.estudiantes = [
      //Aca se supone que este servicio obtiene los estudiantes de una bd
      new Estudiante('John','Doe',21),
      new Estudiante('Pedro', 'Sanchez',27),
      new Estudiante('María', 'Lopez',33)
    ]
  }

   agregarEstudiante(estudiante:Estudiante){
    this._alertService.mostrarMensaje(`
      Nombre: ${estudiante.nombre}
      Apellido: ${estudiante.apellido}
      Edad: ${estudiante.edad}
      `);
    this.estudiantes.push(estudiante);
    this._router.navigateByUrl('estudiantes');
   }
}
