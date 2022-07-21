let cont = 0;
function validar(event) {
    var valido = true;

    var txtNombres = document.getElementById("nombres");
    var txtTelefono = document.getElementById("Ncelular");
    var txtEmail = document.getElementById("correo");
    var txtDireccion = document.getElementById("DirCasa");
    var chkeckProd = document.getElementsByClassName("sus");
    var selectMetodoPago = document.getElementById("Mpago");
    var radiosPrioridad = document.getElementsByClassName("prior");
    var txtObservaciones = document.getElementById("textoOrb");

    var letra = /^[a-z ,.'-]+$/i;
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g;

    /*Validacion NOMBRES*/
    if (txtNombres.value === "") {
        valido = false;
        mensaje("Ingrese sus nombres", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        valido = false;
        mensaje("Ingrese solo letras en sus nombres", txtNombres);
    } else if (txtNombres.value.length > 30) {
        valido = false;
        mensaje("Solo se pueden ingresar hasta 30 caracteres", txtNombres)
    }

    /*Validacion Numero Celular*/
    if (txtTelefono.value === "") {
        valido = false;
        mensaje("Ingrese su numero celular", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        mensaje("Numero celular debe contener 10 digitos", txtTelefono);
    }

    /*Validacion Email*/
    if (txtEmail.value === "") {
        valido = false;
        mensaje("Ingrese su email", txtEmail)
    } else if (!correo.test(txtEmail.value)) {
        valido = false;
        mensaje("Email ingresado no es correcto", txtEmail);
    }

    /*Validacion Direccion*/
    if (txtDireccion.value === "") {
        valido = false;
        mensaje("Ingrese su direccion de residencia", txtDireccion);
    } else if (txtDireccion.value.length > 100) {
        valido = false;
        mensaje("La direccion no puede superar 100 caracteres", txtDireccion);
    }

    /*Validacion Metodo de pago*/
    if (selectMetodoPago.value === null || selectMetodoPago.value === '0') {
        valido = false;
        mensaje("Debe seleccionar el metodo de pago", selectMetodoPago);
    }

    /*Validacion Tipo de Envio*/
    let sel = false;
    for (let i = 0; i < radiosPrioridad.length; i++) {
        if (radiosPrioridad[i].checked) {
            sel = true;
            let res = radiosPrioridad[i].value;
            break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar un tipo de envio", radiosPrioridad[0]);
    }

    /*Validacion Productos*/
    sel = false;
    cont = 0;
    for (let i = 0; i < chkeckProd.length; i++) {
        if (chkeckProd[i].checked) {
            cont++;
            sel = true;
            //break;
        }
    }
    if (!sel) {
        valido = false;
        mensaje("Debe seleccionar al menos un producto", chkeckProd[0]);
    }

    if (txtObservaciones.value.length > 200) {
        valido = false;
        mensaje("Las observaciones no pueden contener mas de 200 caracteres", txtObservaciones);
    }

    if (valido) {
        mensaje("Compra realizada satisfactoriamente, en pocos instantes llegara su fatura electronica", txtEmail)
    }
}

function mensaje(cadenaMensaje, elemento) {
    window.alert(cadenaMensaje);
    elemento.focus();
}

const btnCierra = document.querySelector('#btnCerrar');
const btnAdelanta = document.querySelector('#btnAdelantar');
const btnRetrocede = document.querySelector('#btnRetroceder');
const imagenes = document.querySelectorAll('#galeria5 img');
const lightbox = document.querySelector('#contenedorPriGaleria5');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});


btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1) {
        indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocederImagen = () => {
    if (indiceImagen === 0) {
        indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);