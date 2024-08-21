import { Injectable, OnInit } from '@angular/core';
import { Estudiante } from '../../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService{

  private estudiantes:Estudiante[];

  constructor() {
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
    this.estudiantes.push(estudiante);
   }
}
