import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-materias',
  templateUrl: './formulario-materias.component.html',
  styleUrl: './formulario-materias.component.css'
})
export class FormularioMateriasComponent {
  @Output() nuevaMateria = new EventEmitter<String>();
  
  agregarMateria(materia: String){
    this.nuevaMateria.emit(materia);
  }

  materia:String = '';
}
