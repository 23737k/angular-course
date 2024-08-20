import { Component } from '@angular/core';
import { Estudiante } from '../model/estudiante'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
  estudiantes:Estudiante[];

  constructor(){
    this.estudiantes = [
     new Estudiante('John','Doe',21)
    ]
  }
}
