/*Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios
 para permitir encender y apagar el auto.
 */

  let Auto = {
    // propiedades -> clave: valor;
    color: red, 
    marca: 'ford',
    modelo: 'Fiesta',
    encedido: true,
   
    //metodos
    encender: function (encedido){
       return encedido(true);
    },
    apagar: (encedido)=>{ encedido(false);}
}
  
