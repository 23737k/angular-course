import { Component, Inject, OnInit } from '@angular/core';
import { Estudiante } from '../model/estudiante'
import { AlertService } from '../service/alert/alert.service';
import { EstudianteService } from '../service/estudiante/estudiante.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})

export class EstudiantesComponent implements OnInit{ 
  estudiantes:Estudiante[];
  nombre: string;
  apellido: string;
  edad:number
  
  
  //Inyectamos el servicio mediante el contructor.
  //Se suele utilizar _ delante del nombre para identificar a servicios.
  //Al colocar private se declara y almacena la dependencia al mismo tiempo. Ts crea automáticamente una propiedad para almacenar la dependencia inyectada. 
  //Tambien se podria utilizar public o protected. En este caso el servicio solo puede ser accedido dentro de la clase.

  constructor(private _alertService:AlertService,private _estudianteService:EstudianteService){
  }
  ngOnInit(): void {
    this.estudiantes = this._estudianteService.getEstudiantes();
  }

  agregarEstudiante(){
    this._alertService.mostrarMensaje(this.nombre + ' ' + this.apellido);
    this._estudianteService.agregarEstudiante(new Estudiante(this.nombre, this.apellido, this.edad));
  }
}
