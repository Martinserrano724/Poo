/*4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla 
los valores de los tres objetos instanciados.
 */
class Producto {
    constructor(codigo, nombre,precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
      }

      mostrar(){
        return document.write(` codigo: ${this.codigo} <br> nombre: ${this.nombre}<br>precio: ${this.precio}<br>`);
      }
    }
    let testProducto = new Producto(1501,'jabon',150.00);
    let testProducto1 = new Producto(1601,'shampoo',175.00);
    let testProducto2 = new Producto(0506,'leche',235.50);
    let contenedor=[testProducto,testProducto1,testProducto2];
    document.write(`los datos ingresados  son:<br>`)
    contenedor.forEach(element => {
        element.mostrar();
        document.write(`<br>`)
    });



