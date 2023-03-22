/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información 
relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

 */


class Libro {
        #ISBN;
        #titulo;
        #autor;
        #numeroDePaginas;
    constructor(ISBN, titulo,autor,numeroDePaginas) {
        this.#ISBN = ISBN;
        this.#titulo = titulo;
        this.#autoror=autor;
        this.#numeroDePaginas = numeroDePaginas;
        
      }
      get ISBN(){
        return this.#ISBN;
      }
      set ISBN(isbn){
         this.#ISBN = isbn;
      }
      get titulo(){
        return this.#titulo;
      }
      set titulo(titu){
         this.#titulo=titu;
      }
      get autor(){
        return this.#autor;
      }
      set autor(autor){
         this.#autor=autor;
      }
      get numeroDePaginas(){
        return this.#numeroDePaginas;
      }
      set numeroDePaginas(numeroDePaginas){
         this.#numeroDePaginas=numeroDePaginas;
      }

      mostrarLibro() {
        document.write(`
        <p> El libro ${this.#titulo} con ISBN ${this.#ISBN} creado por el autor ${this.#autor} tiene  ${this.#numeroDePaginas} páginas</p>
        `);
      }
      
      
    }

    let harryPotterlaPiedraFilosofal = new Libro(9788478884452,"Harry Potter la Piedra Filosofal","rowling j.k",256);
    let elSeñordelosAnillos = new Libro(9788445003022,"El Señor de los Anillos","J. R. R. Tolkien",1392);
    harryPotterlaPiedraFilosofal.mostrarLibro();
    elSeñordelosAnillos.mostrarLibro();
    if(harryPotterlaPiedraFilosofal.numeroDePaginas < elSeñordelosAnillos.numeroDePaginas){
      document.write(`<p>El libro con mas paginas es:${elSeñordelosAnillos.titulo} con un total de: ${elSeñordelosAnillos.numeroDePaginas} paginas</p>`)
    }
    else{
      document.write(`<p>El libro con mas paginas es:${harryPotterlaPiedraFilosofal.titulo} con un total de: ${harryPotterlaPiedraFilosofal.numeroDePaginas} paginas</p>`)
 
    }


 