//const lista = [1, 2, 3, 4, 3, 2, 1, 4, 5, 3, 6, 4, 6, 6]

function calcularModa(lista) {

    const listaCount = {}

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1
            } else {
                listaCount[elemento] = 1
            }

        }
    )
    //se convierte el objeto en un arreglo nuevamente, este entrega un arreglo de arreglos
    //estos arreglos tienen dos parametros, primero el valor y segundo la cantidad de repeticiones
    //con la función sort se ordena en orden ascendente teniendo en cuenta la posición 2 [1]
    const listaArray = Object.entries(listaCount).sort(
        function (a, b) {
            a[1] - b[1]
        }
    )

    const moda = listaArray[listaArray.length - 1]
    return moda
}