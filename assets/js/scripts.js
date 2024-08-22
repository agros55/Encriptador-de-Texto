const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");

const analisisEncrip = (letra) => {
    let cambio = letra;
    if (letra == "a") cambio = "ai";
    if (letra == "e") cambio = "enter";
    if (letra == "i") cambio = "imes";
    if (letra == "o") cambio = "ober";
    if (letra == "u") cambio = "ufat";
    return cambio;
}

const analisisDecrip = (texto) => {
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    return texto;
}

const copiar = () => {
    let texto = document.getElementById('texto').innerHTML;
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(texto);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }

    copiarContenido();
}

const encriptar = () => {
    let textoUsuario = document.getElementById("texto-usuario").value;
    const contenedorResultado = document.getElementById("resultado-texto");
    if (textoUsuario != "") {
        textoUsuario = textoUsuario.toLowerCase();
        let textoEncriptado = "";
        const iterator = textoUsuario[Symbol.iterator]();
        let caracter = iterator.next();

        while (!caracter.done) {
            textoEncriptado += analisisEncrip(caracter.value);
            console.log(textoEncriptado);
            caracter = iterator.next();
        }

        contenedorResultado.innerHTML = `
        <p class="texto" id="texto">${textoEncriptado}</p>
    <button class="btn secundario" id="btn-copiar">Copiar</button>
        `

        const btnCopiar = document.getElementById("btn-copiar");
        btnCopiar.addEventListener('click', copiar);
    } else {
        alert("Debe ingresar un texto.")
    }
}

const desencriptar = () => {
    let textoUsuario = document.getElementById("texto-usuario").value;
    const contenedorResultado = document.getElementById("resultado-texto");
    if (textoUsuario != "") {
        textoUsuario = textoUsuario.toLowerCase();
        let textoEncriptado = analisisDecrip(textoUsuario);

        contenedorResultado.innerHTML = `
        <p class="texto" id="texto">${textoEncriptado}</p>
        <button class="btn secundario" id="btn-copiar">Copiar</button>
        `
        const btnCopiar = document.getElementById("btn-copiar");
        btnCopiar.addEventListener('click', copiar);
    } else {
        alert("Debe ingresar un texto.")
    }
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);