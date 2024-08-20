export class Estudiante{
    nombre:String;
    apellido:String;
    edad:Number;
    materias:String[];

    constructor(nombre:String, apellido:String, edad:Number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = [];
    }
   
}