/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), 
peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
generazion z 1994-2010
generacion y 1981-1993
generacion x 1969-1980
Baby Boom 1949-1968
silent generacion(niños pos guerra) 1930 - 1948

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/
class Persona {
    constructor(nombre, edad,dni,sexo,peso,altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni=dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
      }

      esMayorDeEdad(){
        if(this.edad>=18){
            return document.write(`<br>Es mayor de edad<br>`);
        }
        else{
            return document.write(`<br>Es Menor de edad<br>`);
        }
      }
      generaDNI(){
        this.dni=Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
      }
      mostrarDatos(){
        
        return document.write(`<br> nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.dni} <br> Sexo: ${this.sexo}<br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>`);
      }
      mostrarGeneracion(){
        let resultado= 2023-this.edad;
        document.write(`La generacion es: `);
        
        if(resultado<=2010 && resultado >=1994){
            document.write(`generacion Z`)
        }
        else if(resultado<=1993 && resultado >=1981){
            document.write(`generacion Y`)
        }
        else if(resultado<=1980 && resultado >=1969){
            document.write(`generacion X`)
        }
        else if(resultado<=1968 && resultado >=1949){
            document.write(`Baby Boom`)

        }
        else if(resultado<=1948 && resultado >=1930){
            document.write(`silent generacion(niños pos guerra)`)

        }
      }
    }

    let testPersona= new Persona('Martin',24,0,'H',66,170);
    testPersona.generaDNI();
    testPersona.mostrarDatos();
    testPersona.esMayorDeEdad();
    testPersona.mostrarGeneracion();