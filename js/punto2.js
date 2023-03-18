/**
 *Modelando clases

Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero 
y volver a mostrar la descripción del estado de la cuenta.

Rectángulos

 */

let cuenta = {
  // propiedades -> clave: valor;
  titular: "Alex",
  saldo: 0.0,
};
  //metodos
  function ingresar  (saldo) {
    let ingresar = parseFloat(
      prompt(`ingresar el dinero a ingresar en la cuenta`)
    );
    saldo = saldo + ingresar;
    return saldo;
  };
  function extraer (saldo) {
    let extracion = parseFloat(
      prompt(`ingresar el dinero a extraer en la cuenta`)
    );
    saldo = saldo - extracion;
    return saldo;
  };
   function mostrar () {
    console.log("los datos de la cuenta es:\n");
    for (let clave in cuenta){
        console.log(cuenta[clave]);
      }
};

  
  

mostrar();
cuenta.saldo=cuenta.saldo+ingresar(cuenta.saldo);
mostrar();
cuenta.saldo=extraer(cuenta.saldo);
mostrar();
