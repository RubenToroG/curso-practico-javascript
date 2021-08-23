//Función para determinar la media
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}
//Función para determinar si es número es par o impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}


//const lista1 = [12, 343, 342, 3434, 3, 34]

function calcularMediana(lista) {

    //Se ordena en orden ascendente
    lista.sort((a, b) => a - b)
    //se obtiene la mitad del arreglo
    const mitadLista = parseInt(lista.length / 2)

    let mediana

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista - 1]

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
        return mediana = promedioElemento1y2

    } else {
        return mediana = lista[mitadLista]
    }
}