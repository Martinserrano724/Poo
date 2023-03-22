/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.

existeContacto(Conctacto): indica si el contacto pasado existe o no.

listarContactos(): Lista toda la agenda


buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.

eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla

agendaLlena(): indica si la agenda está llena.

huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.

 */
class Contacto {
  #nombre;
  #telefono;

  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nomb) {
    this.#nombre = nomb;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(tel) {
    this.#telefono = tel;
  }
  mostrarContacto() {
    console.log(`
    <p> el contacto es: ${this.nombre} telefono: ${this.telefono}</p>
    `);
  }
}


let listaContactos = [];

/* ************************** Funciones */
function menu() {
  console.log;
  console.log(`\nMenu\n
    1-Aniadir Contacto\n
    2-Existe Contacto\n
    3-Listar Contactos\n
    4-BuscarContacto \n
    5-Eliminar Contacto\n
    6-Agenda Llena\n
    7-Huecos Libres\n
    8-Salir
    `);
}
function aniadirContacto(listaContactos){
    let nombre= prompt(`Ingrese el nombre del contacto`);
    let tel= parseInt(prompt(`Ingrese el telefono del contacto`));
    let conta=new Contacto(nombre,tel);
    listaContactos.push(conta);
}
function existeContacto(listaContactos){
    console.log(`*********************** Resultado de exite *************************`);
    let nombre= prompt(`Ingrese el nombre del contacto a buscar`);
    let bandera=0;
    for (let index = 0; index < listaContactos.length; index++) {
    if(listaContactos[index].nombre == nombre ){
        console.log(`El contacto: ${nombre} existe en la lista`)
         bandera =1;
       }  
       
    }
    if(bandera ==0){
        console.log(`El contacto: ${nombre} no fue encontrado`);
        
       }
    console.log(`************************ Fin  ***************************`);
    
}

function listarContactos(listaContactos){
    console.log(`*********************** Inicio de la lista de contactos *************************`);
    for (let index = 0; index < listaContactos.length; index++) {
       listaContactos[index].mostrarContacto() 
    }
    console.log(`************************ Fin de la lista de contactos ***************************`);
    
}

function totalContactos(listaContactos){
if(listaContactos.length <=10){
    return true;
}
else{
    alert(`Memoria llena Maximo de contactos 10`);
    return false;
}
}

function buscarContacto(listaContactos){
    console.log(`*********************** Resultado de exite *************************`);
    let nombre= prompt(`Ingrese el nombre del contacto a buscar`);
    let bandera=0;
    for (let index = 0; index < listaContactos.length; index++) {
       if(listaContactos[index].nombre == nombre){
        console.log(`El contacto: ${nombre} su telefono es: ${listaContactos[index].telefono}`)
         bandera =1;
       }
       
    }
    if(bandera ==0){
        console.log(`El contacto: ${nombre} no fue encontrado`);
        
       }
    console.log(`************************ Fin  ***************************`);
    
}
//elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
function eliminarContacto(listaContactos){
    let nombre= prompt(`Ingrese el nombre del contacto a Eliminar`);
    let eliminado

    for (let index = 0; index < listaContactos.length; index++) {
        if(listaContactos[index].nombre === nombre){
         eliminado= listaContactos.splice(index,1);
          alert(`El contacto fue eliminado`);
        }
        
     }
     if(bandera ==0){
         console.log(`El contacto: ${nombre} no fue encontrado`);
         
        }
}
function  huecosLibres(listaContactos){
    let resultado= 10 -listaContactos.length;
    console.log(`El numero de huecos disponibles es: ${resultado} de 10`);
    }

/* ************************** main */

let bandera = true;
do {
  menu();
  let opc = parseInt(prompt(`Ingrese un opcion`));
  switch (opc) {
    case 1: {
        if(totalContactos(listaContactos)){
            aniadirContacto(listaContactos);};
      break;
    }
    case 2: {
        existeContacto(listaContactos);
      break;
    }
    case 3: {
        listarContactos(listaContactos);
      break;
    }
    case 4: {
        buscarContacto(listaContactos);
      break;
    }
    case 5: {
        eliminarContacto(listaContactos);
      break;
    }
    case 6: {
        if(totalContactos(listaContactos)){
        console.log(`Memoria disponible`);
        }
      break;
    }
    case 7: {
        huecosLibres(listaContactos);
      break;
    }
    default: {
      bandera = false;
      break;
    }
  }
} while (bandera);
