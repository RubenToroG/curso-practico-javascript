//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4
}
function areaCuadrado(lado) {
    return lado*lado
}

//Código del triangulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base
}
function areaTriangulo (base, altura) {
    return (base * altura)/2
}

//Código del circulo
function diametroCirculo(radio) {
    return radio * 2
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * Math.PI
}
function areaCirculo(radio) {
    return radio * radio * Math.PI
}

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    document.getElementById("resultCuadrado").value = perimetro
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    document.getElementById("resultCuadrado").value = area
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("InputTrianguloLado1")
    const lado2 = document.getElementById("InputTrianguloLado2")
    const lado3 = document.getElementById("InputTrianguloLado3")

    let perimetro = perimetroTriangulo(
        parseFloat(lado1.value), 
        parseFloat(lado2.value), 
        parseFloat(lado3.value)
        )
    document.getElementById("resultTriangulo").value = perimetro
}
function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase")
    const altura = document.getElementById("InputTrianguloAltura")

    let area = areaTriangulo(
        parseFloat(base.value), 
        parseFloat(altura.value)
        )
    document.getElementById("resultTriangulo").value = area
}


function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo")

    let area = areaCirculo(
        parseFloat(radio.value)
        )
    document.getElementById("resultCirculo").value = area
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo")

    let perimetro = perimetroCirculo(
        parseFloat(radio.value)
        )
    document.getElementById("resultCirculo").value = perimetro
}