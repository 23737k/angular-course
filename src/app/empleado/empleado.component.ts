import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre:String="";
  apellido:String="";
  cargo:String="";
  salario:Number=0;

  constructor(nombre:String, apellido:String, cargo:String, salario:Number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }

}
