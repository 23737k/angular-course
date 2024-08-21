import { Component, Inject } from '@angular/core';
import { Estudiante } from '../model/estudiante'
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})

export class EstudiantesComponent { 
  estudiantes:Estudiante[];
  nombre: string;
  apellido: string;
  edad:number;

  //Inyectamos el servicio mediante el contructor.
  //Se suele utilizar _ delante del nombre para identificar a servicios.
  //Al colocar private se declara y almacena la dependencia al mismo tiempo. Ts crea automáticamente una propiedad para almacenar la dependencia inyectada. 
  //Tambien se podria utilizar public o protected. En este caso el servicio solo puede ser accedido dentro de la clase.

  constructor(private _alertService:AlertService){
    this.estudiantes = [
     new Estudiante('John','Doe',21)
    ]
  }

  agregarEstudiante(){
    this._alertService.mostrarMensaje(this.nombre + ' ' + this.apellido);
    this.estudiantes.push(new Estudiante(this.nombre, this.apellido, this.edad));
  }
}
