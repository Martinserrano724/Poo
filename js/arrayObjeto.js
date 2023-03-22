/*
Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario 
si el producto no existe en el array.
*/

let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

  
  function mostrarTablaCompleta(){
document.write(`los datos ingresados son 
<table>
<thead>
  <tr>
  <th>NombreProducto</th>
  <th>Precio</th>
  <th>Categoria</th>
  </tr>
<thead>
    <tbody>
 
`)
      listaProductos.map(item=>{
        //Accedemos a su contenido
          document.write(` <tr>
          <td>${item.nombreProducto}</td>
          <td>${item.precio}</td>
          <td>${item.categoria}</td>
          </tr>
          `)
        
        });
        document.write(`
        </tbody>
    </table>`)
}

  function mostrarTablaFiltrada(){
document.write(`tabla de Protector solar 
<table>
<thead>
  <tr>
   <th>NombreProducto</th>
   <th>Precio</th>
   <th>Categoria</th>
  </tr>
<thead>
    <tbody>
    <td>
`)
listaProductos.map(item=>{
    //Accedemos a su contenido
    if(item.categoria.includes(`Protector solar`)){
        document.write(` <tr>
        <td>${item.nombreProducto}</td>
        <td>${item.precio}</td>
        <td>${item.categoria}</td>
        </tr>
        `)
    }
    });
    document.write(`
    </tbody>
</table>`)
}
/*
Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.
*/

function buscarSerum(){
    document.write(`tabla de Serun 
<table>
<thead>
  <tr>
   <th>NombreProducto</th>
   <th>Precio</th>
   <th>Categoria</th>
  </tr>
<thead>
    <tbody>
    <td>
`)
    listaProductos.map(item=>{
        //Accedemos a su contenido
        if(item.nombreProducto.includes(`Sérum`)){
            document.write(` <tr>
            <td>${item.nombreProducto}</td>
            <td>${item.precio}</td>
            <td>${item.categoria}</td>
            </tr>
            `)
        }
        });
        document.write(`
    </tbody>
</table>`)

}
function buscarBruma(){
    let bandera=true;
    document.write(`tabla de Bruma 
<table>
<thead>
  <tr>
   <th>NombreProducto</th>
   <th>Precio</th>
   <th>Categoria</th>
  </tr>
<thead>
    <tbody>
    <td>
`)
    listaProductos.map(item=>{
        //Accedemos a su contenido
        if(item.nombreProducto.includes(`Bruma`)){
            bandera=false;
            document.write(` <tr>
            <td>${item.nombreProducto}</td>
            <td>${item.precio}</td>
            <td>${item.categoria}</td>
            </tr>
            `)
        }
        
        });
        if(bandera){
            document.write(` <tr>
            <td>no encontrado</td>
            <td>0</td>
            <td>Bruma</td>
            </tr>
            `)
        }
        document.write(`
    </tbody>
</table>`)

}
mostrarTablaCompleta();
mostrarTablaFiltrada();
buscarSerum();
buscarBruma();