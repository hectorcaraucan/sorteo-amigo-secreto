// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos.
let amigos = [];

/**
 * Agrega un amigo a la lista.
 * Captura el valor del campo de entrada, valida que no esté vacío,
 * lo agrega al array 'amigos' y actualiza la lista en la UI.
 */
function agregarAmigo() {
    // Obtener el nombre del amigo desde el input.
    let amigoInput = document.getElementById('amigo');
    let nombreAmigo = amigoInput.value;

    // Validar que se haya ingresado un nombre.
    if (nombreAmigo == '') {
        alert('Por favor, inserte un nombre.');
        return; // Detiene la ejecución si el campo está vacío.
    }

    // Agregar el nombre a la lista de amigos.
    amigos.push(nombreAmigo);

    // Actualizar la lista de amigos en la pantalla.
    actualizarListaAmigos();

    // Limpiar el campo de texto después de agregar el nombre.
    amigoInput.value = '';
}

/**
 * Actualiza la lista de amigos mostrada en la página.
 * Limpia la lista actual y la vuelve a generar con los nombres del array 'amigos'.
 */
function actualizarListaAmigos() {
    // Obtener el elemento de la lista de amigos.
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista para evitar duplicados.
    lista.innerHTML = '';

    // Recorrer el array de amigos y agregar cada uno a la lista HTML.
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista.
        let item = document.createElement('li');
        item.textContent = amigos[i];
        // Agregar el elemento a la lista.
        lista.appendChild(item);
    }
}

/**
 * Realiza el sorteo del amigo secreto.
 * Selecciona un nombre al azar de la lista de amigos y lo muestra.
 */
function sortearAmigo() {
    // Validar que haya al menos 2 amigos para poder sortear.
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo.');
        return;
    }

    // Generar un índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado.
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
