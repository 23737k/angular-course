import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre:String;
  apellido:String;
  email:String;
  consulta:String;

  enviarConsulta(){
    alert("Consulta enviada con éxito");
  }
}
