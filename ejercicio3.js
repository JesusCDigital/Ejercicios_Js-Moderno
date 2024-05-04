//Se crea la Clase Libro con sus parametros
class Libro {
    constructor(titulo, autor, añoDePublicacion) {
       this.titulo = titulo;
       this.autor = autor;
       this.añoDePublicacion = añoDePublicacion;
    }

   //Se crea el metodo Informacion para mostrar los parametros de la clase Libro
    informacion() {
       return `Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.añoDePublicacion}`;
    }
   }

   //Se se crea una variable que agregague los datos dentro de la clase y se muestran en consola   
   const miLibro = new Libro('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605);
   console.log(miLibro.informacion());
   