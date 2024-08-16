import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre= 'Pedro'
  apellido= 'Perez'
  empresa= 'Mercado Libre'
  edad=26
  private sexo=''

  isChecked= true;

  setSexo(event:Event){
    //Mediante target podemos acceder al elemento html del evento. 
    //Primero lo casteamos al elemento correspondiente con <>
    let input   = <HTMLInputElement> event.target; 
    //Le asignamos el value del radio button a la propiedad sexo
    this.sexo = input.value;   
  }
  getSexo(){
    return this.sexo;
  }

}
