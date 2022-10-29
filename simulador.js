let producto = ""
let precio = 0
let cantidad = 0
let precioTotal = 0
let seguirComprando =false


do {
    producto = prompt ("¿cual queres comprar simple , doble o triple?" , "ej: simple,doble,triple")
    cantidad = parseInt (prompt("¿cuantas queres comprar?"))
    
    while(Number.isNaN(cantidad)|| cantidad === 0) {
        if (cantidad !== 0) {
        alert ("Tenes que ingresar la cantidad")
    } else {
        alert ("Tienes que agregar un numero mayor")
    }
        cantidad = parseInt (prompt("¿cuantas queres comprar?"))
    }

    switch (producto) {
        case "simple" :
            precio = 800
            break
        case "doble" :
            precio = 1000
            break
        case "triple" :
            precio = 1200
            break 
        default: 
        alert("Has ingresado algún dato incorrecto")
        precio = 0
        cantidad = 0
    }

    precioTotal += precio * cantidad

    seguirComprando = confirm("¿estas seguro que no queres agregar otro producto?")

} while(seguirComprando)

alert("El total de la compra es: $" +precioTotal)

let finalizarCompra = confirm("¿Estas seguro que quieres finalizar la compra?")

if (finalizarCompra) {
    alert ("Su compra se ha realizado con éxito!!")
} else {
    alert ("Que lo disfrutes!")
}
