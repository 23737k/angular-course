import { Injectable, OnInit } from '@angular/core';
import { Estudiante } from '../../model/estudiante';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService{

  private estudiantes:Estudiante[];

  constructor(private _alertService:AlertService) {
    this.estudiantes = [
      //Aca se supone que este servicio obtiene los estudiantes de una bd
      new Estudiante('John','Doe',21),
      new Estudiante('Pedro', 'Sanchez',27),
      new Estudiante('María', 'Lopez',33)
    ]
  }

   getEstudiantes():Estudiante[]  {
    return this.estudiantes;
   }
   agregarEstudiante(estudiante:Estudiante){
    this._alertService.mostrarMensaje(`
      Nombre: ${estudiante.nombre}
      Apellido: ${estudiante.apellido}
      Edad: ${estudiante.edad}
      `);
    this.estudiantes.push(estudiante);
   }
}
