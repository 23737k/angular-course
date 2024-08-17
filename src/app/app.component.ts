import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registro de usuario';
  nombre:String="";
  apellido:String="";
  textoRegistro:String="El usuario se ha registrado con éxito: ";
  registrado:Boolean=false;

  registrarse():void{
    if(this.nombre ==="" || this.apellido ===""){
      alert("El nombre y apellido no pueden estar vacíos");
      return;
    }
    this.registrado = true;
  }
}
