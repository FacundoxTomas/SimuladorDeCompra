const arrayProductos = [];

const producto1 = new Producto(1, 'simple', 800);
const producto2 = new Producto(2, 'doble', 1000);
const producto3 = new Producto(3, 'triple', 1200);
const producto4 = new Producto(4, 'papas', 500);


arrayProductos.push(producto1, producto2, producto3 , producto4);


const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio)
};


const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio)
};

const mostrarListaOrdenada = () => {
    let array = []
    arrayProductos.forEach(producto => array.push(producto.nombre+ '$'+producto.precio))
    alert('Lista de precios:'+'\n'+array.join('\n'));
};

function comprarProducto() {
let productoNombre = ""
let cantidad = 0
let precioTotal = 0
let stockProducto = 0
let seguirComprando =false


do {
    productoNombre = prompt ("¿cual queres comprar simple , doble o triple?" , "ej: simple,doble,triple")
    stockProducto = parseInt (prompt("¿cuantas queres comprar?"))

    const producto = arrayProductos.find(producto => producto.nombre === productoNombre)

    if (producto) {
        total += producto.precio * stockProducto;
    } else {
        alert('El producto no se encuentra en stock.') 
    }

    suguirComprando = confirm("¿estas seguro que no queres agregar otro producto?")
    
    } while (seguirComprando)

 aplicarDescuento(total)

}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Queres envio a domicilio?')

    if(tieneEnvioAdomicilio && totalCompra >= 2000) {
        alert('Tenes envio gratis. El precio total de la compra es:' +totalCompra)
    }  else if (tieneEnvioADomicilio && totalCompra <2000 && totalCompra  !== 0) {
        totalCompra += 700
        alert('El envio cuesta $700. El total de la compra es:' + totalCompra)
    }  else {
        alert('El total de la compra es:  '+totalCompra)
    }
}

function comprar() {
    const quieroOrdenar = confirm('queres ordenar la lista de menor a mayor?')
    if (quieroOrdenar) {
        ordenarMayorMenor()
    } else {
        ordenarMayorMenor()
    }
    comprarProducto()
}

    comprar()




