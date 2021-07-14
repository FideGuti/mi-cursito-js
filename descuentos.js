// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const price = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = Number(inputDiscount.value);

    const descuentoTotal = calcularPrecioConDescuento(price,discount);
    // alert(descuentoTotal)

    //escribir html en jsScript
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + descuentoTotal

}



// console.log({
//     //paras que me imprima un objeto
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

// console.log(`El descuento es de ${precioConDescuento}`);

