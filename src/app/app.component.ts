import { Component } from '@angular/core';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
  empleados:EmpleadoComponent[];
  nombre:String="";
  apellido:String="";
  cargo:String="";
  salario:Number=0;

  constructor(){
    this.empleados = [
     new EmpleadoComponent("Kenti", "Antezana", "Backend Developer", 2500),
     new EmpleadoComponent("Michelle", "Pasten", "Frontend Developer", 2500),
     new EmpleadoComponent("Kiwi", "Mistico", "Fullstack Developer", 5000)
    ]
  }

  registrarEmpleado(){
    let empleado:EmpleadoComponent = new EmpleadoComponent(this.nombre, this.apellido, this.cargo, this.salario);
    this.empleados.push(empleado);
  }

}
