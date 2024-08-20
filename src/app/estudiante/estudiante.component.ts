import { Component, Input, Output } from '@angular/core';
import {Estudiante } from '../model/estudiante';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
  @Input() student:Estudiante;
  @Input() i:number;

  agregarMateria(materia:String){
    this.student.materias.push(materia);
  }
}
