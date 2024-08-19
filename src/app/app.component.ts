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

  entradasBlog:any[];

  constructor(){
    this.entradasBlog=[
      {titulo:"Los kiwis dominan el mundo"},
      {titulo:"Los pollitos cada vez más místicos"},
      {titulo: "El blog más alucinante del mundo!"}
    ]
  }


  registrarse():void{
    if(this.nombre ==="" || this.apellido ===""){
      alert("El nombre y apellido no pueden estar vacíos");
      return;
    }
    this.registrado = true;
  }
}
