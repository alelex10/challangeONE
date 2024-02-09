let inputAEncriptar = document.querySelector("#txtIngresado");
let pMonstrar = document.getElementById("mostrarTexto");
let pAdvertencia = document.querySelector(".advertencia");
//querySelector devuelve el primer elemento con la clase ingresada
//querySelectorAll devuelve una lista de elementos con esa clase
let noTexto = document.querySelector(".noTexto");
let btnCopiar = document.getElementById("copiar");
let vocalEncriptada = ["ai", "enter", "imes", "ober", "ufat"];
let vocal = ["a", "e", "i", "o", "u"];

//el texto ingresado solo puede contener minusculas
function validarTxt() {
    for (const letra of inputAEncriptar.value) {
        if (!((letra >= 'a' && letra <= 'z') || letra == ' ')) {
            pAdvertencia.style.display = "block";
            return false;
        }
    }
    pAdvertencia.style.display = "none";
    return true;
}
//btn para encriptar
function encriptar() {
    if (validarTxt() && hayTexto()) {
        let txtEncriptado = "";
        for (const letra of inputAEncriptar.value) {
            switch (letra) {
                case 'a':
                    txtEncriptado += "ai";
                    break;
                case 'e':
                    txtEncriptado += 'enter';
                    break;
                case 'i':
                    txtEncriptado += 'imes';
                    break;
                case 'o':
                    txtEncriptado += 'ober';
                    break;
                case 'u':
                    txtEncriptado += ('ufat');
                    break;
                default:
                    txtEncriptado += letra;
                    break;
            }
        }
        console.log(txtEncriptado);
        pMonstrar.innerHTML = txtEncriptado;
    }
}
//funcion desencriptar 
function desencriptar() {
    if (hayTexto() && validarTxt()) {
        let txtADesencriptar = inputAEncriptar.value;
        let txtDesencriptado = txtADesencriptar;
        //reviso por cada vocal encriptada
        for (let indexVoc = 0; indexVoc < vocalEncriptada.length; indexVoc++) {
            //repetir mientras exista vocal encriptada en el texto
            while (txtDesencriptado.indexOf(vocalEncriptada[indexVoc]) != -1) {
                //remplaso cada vocal encriptada por la vocal normal
                txtDesencriptado = txtDesencriptado.replace(vocalEncriptada[indexVoc], vocal[indexVoc]);
            }
        }
        pMonstrar.innerHTML = txtDesencriptado;
    }
}
//ocultar "Ningún mensaje fue encontrado"
function hayTexto() {
    if (inputAEncriptar.value == "") {
        noTexto.style.display = "block";
        pMonstrar.style.display="none"
        btnCopiar.style.display = "none"
        return false;
    } else {
        pMonstrar.style.display="block";
        pMonstrar.style.maxHeight="50vh";
        noTexto.style.display = "none";
        btnCopiar.style.display = "block"
        return true
    }
}
// copiar 
function copiarTextoAlPortapapeles() {
    // Crea un elemento de texto temporal
    var elementoTemporal = document.createElement("textarea");

    // Asigna el texto al elemento temporal
    elementoTemporal.value = pMonstrar.textContent;

    // Agrega el elemento al DOM
    document.body.appendChild(elementoTemporal);

    // Selecciona y copia el texto al portapapeles
    elementoTemporal.select();
    document.execCommand("copy");

    // Remueve el elemento temporal
    document.body.removeChild(elementoTemporal);

    //indicar que se copio correctamente
    document.getElementById("copiado").style.opacity="100";
}
