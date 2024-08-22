import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from '../model/estudiante';
import { EstudianteService } from '../service/estudiante/estudiante.service';

@Component({
  selector: 'app-modificar-estudiante',
  templateUrl: './modificar-estudiante.component.html',
  styleUrl: './modificar-estudiante.component.css'
})
export class ModificarEstudianteComponent {
  nombre:String;
  apellido:String;
  edad:Number;
  indice:number;
  

  constructor(private _router:Router, private _route:ActivatedRoute, private _estudianteService:EstudianteService){
    //Obtengo el path y lo almaceno en el indice
    this.indice = this._route.snapshot.params['id'];
    //Mediante EstudianteService y el índice obtengo el estudiante deseado
    let estudiante = this._estudianteService.obtenerEstudiante(this.indice);
    this.nombre = estudiante.nombre;
    this.apellido = estudiante.apellido;
    this.edad = estudiante.edad;
  }

  modificarEstudiante(){
    let estudiante = new Estudiante(this.nombre, this.apellido, this.edad);
    this._estudianteService.modificarEstudiante(this.indice, estudiante);
    this._router.navigateByUrl('/estudiantes'); 
  }

}
