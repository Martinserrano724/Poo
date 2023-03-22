/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y 
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" 
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos 
objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" 
para verificar que cada animal emite el sonido adecuado. 

*/

class Animal{
    #nombre;
    #edadAnimal
    constructor(nombre, edad ) {
        this.#nombre = nombre;
        this.#edadAnimal = edad;
      }
      get nombre() {
        return this.#nombre;
      }
      set nombre(nomb) {
        this.#nombre = nomb;
      }
      get edadAnimal() {
        return this.#edadAnimal;
      }
      set edadAnimal(edad) {
        this.#edadAnimal = edad;
      }
      emitirSonido(){
        document.write(`El ruido del  :  `);
      }
}
class Perro extends Animal{
    constructor( nombre , edad ) {
        super(nombre,edad);
      }
      emitirSonido(){
        document.write(`<p>`);
        super.emitirSonido();
        document.write(` perro llamado ${super.nombre} hace Guau Guau Guau</p>`)
      }
}
class Gato extends Animal{
    constructor( nombre , edad ) {
        super(nombre,edad);
        
      }
      emitirSonido(){
        document.write(`<p>`);
        super.emitirSonido();
        document.write(` Gato llamado ${super.nombre} hace Miau Miau Miau </p>`)
      }
}

let perro1 =new Perro("Negro",7);
let perro2 =new Perro("Draco",13);
let gato1 =new Gato("Mini",13);
perro1.emitirSonido();
perro2.emitirSonido();
gato1.emitirSonido();