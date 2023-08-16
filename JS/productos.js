let acumular = 0
let cargoEnvio = false

function mostrarProductos() {
    const mostrarprod = document.querySelector("#mostrarprod")
    mostrarprod.innerHTML = ``

    const filtrarletras = document.querySelector(".filtrar").value.toLowerCase()

    stock.forEach(e => {
        if (e.producto.toLowerCase().includes(filtrarletras)) {
            let prodStock = document.createElement("div");
            prodStock.id = `item-${e.id}`;
            prodStock.innerHTML = `<div class="row main align-items-center">
                                <div class="col-2"><img class="img-fluid tamaño" src=${e.img}></div>
                                <div class="col">
                                
                                <div class="row producto">${e.producto}</div>
                                </div>
                                <div class="col">
                                <a href="javascript:traerEliminar(${e.id})" class="masgrande border">-</a><a href="#" class="masgrande">/</a><a href="javascript:traerProducto(${e.id})" class="masgrande border">+</a>
                                </div>
                                <div class="col precio producto">$${e.precio}</div>
                                </div>`;
            mostrarprod.appendChild(prodStock);
        }
    });
}

const buscarInput = document.getElementById("buscarInput");
buscarInput.addEventListener("input", mostrarProductos);

mostrarProductos();



function traerProducto(id) {
    let agregar = document.querySelector("#item-" + id)
    let producto = agregar.querySelector(".producto").textContent
    let precio = agregar.querySelector(".precio").textContent
    let img = agregar.querySelector(".img-fluid").src
    let new_prod = carrito.push(new Stock(id, producto, precio, img))
    agregarProductosCarrito(new_prod)
}



function agregarProductosCarrito() {
    let cantidad = 0

    let mostrarCarrito = document.querySelector("#mostrarCarrito")
    mostrarCarrito.innerHTML = ``
    carrito.forEach(e => {
        cantidad++
        let mostrarCarrito = document.querySelector("#mostrarCarrito")
        let new_div = document.createElement("div")
        new_div.innerHTML = `
                            <div class="row" id="resumenCarrito">
                            <div class="col carritotamaño" style="padding-left:0;">${e.producto}</div>
                            <div class="col text-right carritotamaño">${e.precio}</div>
                            </div>
                            `
        mostrarCarrito.appendChild(new_div)
    })
    let div_cantidad = document.querySelector("#cantidadProd")
    div_cantidad.innerHTML = ``
    let new_cantidad = document.createElement("div")
    new_cantidad.innerHTML = ` <div class="col masgrande" style="padding-left:0;">Productos: ${cantidad}</div>`
    div_cantidad.appendChild(new_cantidad)
    mostrarTotalCompra()
}


function traerEliminar(id) {
    let encontrado = false
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === id) {
            carrito.splice(i, 1);
            agregarProductosCarrito();
            Toastify({
                text: "Eliminaste el articulo carrito",
                duration: 2000,
                gravity: "bottom",
                position: "center",
            }).showToast();
            encontrado = true
            return;
        }
    }
    if (!encontrado) {
        Toastify({
            text: "El articulo no esta agregado al carrito",
            duration: 3000,
            gravity: "bottom",
            position: "center",
        }).showToast();
    }
}

traerEliminar();

function totalizarcompra() {
    acumular = 0
    for (let i = 0; i < carrito.length; i++) {
        const cambioNumero = parseFloat(carrito[i].precio.replace('$', '').trim())
        acumular += cambioNumero
    }
    if(cargoEnvio){
        acumular += 500
    }
    return acumular;
}

totalizarcompra();

function mostrarTotalCompra(total) {
    let totalcarrito = document.querySelector("#totalcarrito")
    total = totalizarcompra()
    totalcarrito.innerHTML = `$ ${total}`
}
mostrarTotalCompra(acumular)



function eventoCancelar() {
    const cancelarcompra = document.querySelector("#cancelarCompra")
    cancelarcompra.addEventListener("click", () => {
        Swal.fire({
            title: 'Estas seguro que quieres cancelar tu compra?',
            showDenyButton: true,
            confirmButtonText: 'Si, deseo cancelar',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {

                if (!carrito.length) {
                    Swal.fire('El carrito esta vacio!')

                } else {
                    Swal.fire('Compra cancelada!', '', 'error')
                    carrito = []
                    let mostrarCarrito = document.querySelector("#mostrarCarrito")
                    mostrarCarrito.innerHTML = ``
                    let div_cantidad = document.querySelector("#cantidadProd")
                    div_cantidad.innerHTML = ``
                    let totalcarrito = document.querySelector("#totalcarrito")
                    totalcarrito.innerHTML = ``

                }
            }
        })
    })
}
eventoCancelar();


function envioProducto() {
    let enviar = document.querySelector("#envio")
    enviar.addEventListener("change", () => {
        let enviarProducto = enviar.options[enviar.selectedIndex]
        if (enviarProducto.value === "enviostandar") {
            cargoEnvio = true
        }else if (enviarProducto.value !== "enviostandar" && cargoEnvio) {        
            cargoEnvio = false
        }
        totalizarcompra()
        mostrarTotalCompra(acumular)
    })
}

envioProducto();


function pagar(){
    let pagar = document.querySelector("#pagar")
    let iframe1 = document.querySelector("#iframe1");
    pagar.addEventListener("click", ()=>{
        
    })
}

pagar();