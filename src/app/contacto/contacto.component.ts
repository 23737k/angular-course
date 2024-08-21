import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

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

  constructor(private _router:Router){
  }

  enviarConsulta(){
    alert("Consulta enviada con éxito");
  }

  //Primeramente debo inyectar el Router.
  irAHome(){
    this._router.navigateByUrl('');
  }
}
