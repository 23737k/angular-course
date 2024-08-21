import { Component } from '@angular/core';
import { Estudiante } from '../model/estudiante';
import { EstudianteService } from '../service/estudiante/estudiante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  estudiantes:Estudiante[];
  nombre: string;
  apellido: string;
  edad:number
  

  constructor(private _estudianteService:EstudianteService){
  }

  agregarEstudiante(){
    this._estudianteService.agregarEstudiante(new Estudiante(this.nombre, this.apellido, this.edad));
  }
}
