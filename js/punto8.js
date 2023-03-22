/*8- Crea una clase llamada "Persona" que tenga las propiedades 
"nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". 
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus 
propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
    #nombre;
    #edadPersona;
    #profesion;
  
    constructor(nombre, edad ,profesion) {
      this.#nombre = nombre;
      this.#edadPersona = edad;
      this.#profesion= profesion;
    }
    get nombre() {
      return this.#nombre;
    }
    set nombre(nomb) {
      this.#nombre = nomb;
    }
    get edadPersona() {
      return this.#edadPersona;
    }
    set edadPersona(edad) {
      this.#edadPersona = edad;
    }
    get profesion() {
      return this.#profesion;
    }
    set profesion(prof) {
      this.#profesion = prof;
    }
    
    saludar(){
        document.write(`<p>Hola soy ${this.nombre} mi trabajo es ${this.profesion} y tengo ${this.edadPersona} años</p>`);
    }
    despedirse(){
        document.write(`<p>Adios</p>`);
    }

  }
  let martin = new Persona("Martin ",24,"Ingeniero");
  let alejandro = new Persona("Alejandro ",25,"Tecnico en reparacion de equipos");
  martin.saludar();
  alejandro.saludar();
  martin.despedirse();
  alejandro.despedirse();