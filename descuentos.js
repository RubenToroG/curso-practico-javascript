function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}

function onClickPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById("inputDiscount")
    let discountValue = inputDiscount.value

    const inputCoupon = document.getElementById("cupons")
    couponValue = inputCoupon.value

    switch(couponValue){
        case "cupon1":
            discountValue = Number(discountValue) + Number(5)
        break
        default:
            errorCupon.innerText = "Cupón no existe"
        break
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultPrice = document.getElementById("resultPrice")
    resultPrice.innerText = "El precio con descuento es:  $" + precioConDescuento
}