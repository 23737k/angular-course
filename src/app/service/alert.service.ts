import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  mostrarMensaje(mensaje:String){
    alert('Usted está a punto de registrar al alumno: ' + mensaje);
  }
}
