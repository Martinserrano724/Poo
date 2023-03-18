/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar y 
mostrar sus propiedades, calcular el perímetro y el área

*/class Rectángulos {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
      }
    
      calcularPerimetro() {
        return 2*(this.alto+this.ancho);
      }
      calcularArea() {
        return this.alto*this.ancho;
      }
      mostrar(){
        document.write(`Los Datos ingresados son:<br> alto: ${this.alto} <br> ancho: ${this.ancho}<br>`);
      }
    }

    let altura=parseInt(prompt(`Ingresar la altura del rectangulo`));
    let ancho=parseInt(prompt(`Ingresar el ancho del rectangulo`));
    let testRectangulo = new Rectángulos(altura,ancho);
    testRectangulo.mostrar()
    document.write(`El area del rectangulo es: ${testRectangulo.calcularArea()}<br>`);
    document.write(`El perimetro del rectangulo es :${testRectangulo.calcularPerimetro()}<br>`);
    

