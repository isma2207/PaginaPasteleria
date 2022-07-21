const formulario = document.getElementById("solicitud");
formulario.addEventListener('submit', validar);

let i=0;
let flag = true;

function validar(event) {
    var valido = true;
    let fechaActual = new Date(); 

    //Datos personales
    const cedula = document.getElementById("cedula");
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const radiosGenero = document.getElementsByName("genero");//retorna un arreglo;
    const fecha = document.getElementById("fecha");
    const email = document.getElementById("correo");
    const estado = document.getElementById("estado");
    const escuela = document.getElementById("escuela");
    const fechaEscuela = document.getElementById('fechaE');
    const colegio = document.getElementById("colegio");
    const fechaColegio = document.getElementById("fechaC");
    const titulo = document.getElementById("tituloC");
    const nombreU = document.getElementById("universidad1");
    const carrera = document.getElementById('carrera');
    const fechaGraduado = document.getElementById('fechaA');
    const semestre = document.getElementById("semestre");

    borrarMensajes();

    //ESTUDIOS

    //escuela: 
    //nombre escuela
    if (escuela.value === "") {
        valido = false;
        mensaje("Nombre de escuela es requerido", escuela);
    } else if (!letra.test(escuela.value)) { 
        valido = false;
        mensaje("Nombre de escuela sólo debe contener letras", escuela);
    } else if (escuela.value.length > 20) {
        valido = false;
        mensaje("Nombre de escuela máximo 50 caracteres", escuela);
    }

    //año escuela
    let dato1=  fechaEscuela.value;
    let fechaE = new Date(dato1);
    
    // let fechaActual1 = new Date();   
    if(fechaE > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual", fechaEscuela);
    }

    //colegio: 
    //nombre colegio
    if (colegio.value === "") {
        valido = false;
        mensaje("Nombre de colegio es requerido", colegio);
    } else if (!letra.test(colegio.value)) { 
        valido = false;
        mensaje("Nombre de colegio sólo debe contener letras", colegio);
    } else if (colegio.value.length > 20) {
        valido = false;
        mensaje("Nombre de colegio máximo 50 caracteres", colegio);
    }
    //año colegio
    let dato2=  fechaColegio.value;
    let fechaC = new Date(dato2);
      
    if(fechaC > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual", fechaColegio);
    }
    //titulo colegio
    if (titulo.value === "") {
        valido = false;
        mensaje("Nombre de titulo es requerido", titulo);
    } else if (!letra.test(titulo.value)) { 
        valido = false;
        mensaje("Nombre de titulo sólo debe contener letras", titulo);
    } else if (titulo.value.length > 20) {
        valido = false;
        mensaje("Nombre de titulo máximo 50 caracteres", titulo);
    }

    //universidad
    const universidad = document.getElementsByName("universidad");
    for(i=0; i<universidad.length; i++){
        if(universidad[i].checked){
            flag = true;
            let res=universidad[i].value;       
            break;
        }
    }
    if (!flag) {
        valido = false;
        mensaje("Debe seleccionar un opción", universidad[0]);
    }

    //nombre universidad
    if (nombreU.value === "") {
        valido = false;
        mensaje("Nombre de universidad es requerido", nombreU);
    } else if (!letra.test(nombreU.value)) { 
        valido = false;
        mensaje("Nombre de universidad sólo debe contener letras", nombreU);
    } else if (nombreU.value.length > 50) {
        valido = false;
        mensaje("Nombre de universidad máximo 50 caracteres", nombreU);
    }

    //nombre carrera
    if (carrera.value === "") {
        valido = false;
        mensaje("Nombre de carrera es requerido", carrera);
    } else if (!letra.test(carrera.value)) { 
        valido = false;
        mensaje("Nombre de carrera sólo debe contener letras", carrera);
    } else if (carrera.value.length > 50) {
        valido = false;
        mensaje("Nombre de carrera máximo 50 caracteres", carrera);
    }

    //graduado
    const graduado = document.getElementsByName("radioGraduado");
    for(i=0; i<graduado.length; i++){
        if(graduado[i].checked){
            flag = true;
            let res=graduado[i].value;       
            break;
        }
    }
    if (!flag) {
        valido = false;
        mensaje("Debe seleccionar una opción", graduado[0]);
    }

    //fecha de graduación
    let dato3=  fechaGraduado.value;
    let fechaG = new Date(dato3);
      
    if(fechaG > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual", fechaGraduado);
    }

    //número de semestre
    if (semestre.value === "") {
        valido = false;
        mensaje("Número de semestre es requerido", semestre);
    } else if (!numero.test(semestre.value)) { 
        valido = false;
        mensaje("Número de semestre sólo debe contener números", semestre);
    } else if (semestre.value.length > 1) {
        valido = false;
        mensaje("Número de semestre máximo 1 dígito", semestre);
    }
    //EXPERIENCIA LABORAL

    //REFERENCIAS

    // expresiones regulares
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var numero = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros

     //validación para cédula
     if (cedula.value === "") {
        valido = false;
        mensaje("Cédula es requerida", cedula);
    } else if (!numero.test(cedula.value)) { 
        valido = false;
        mensaje("Cédula sólo debe contener números", cedula);
    } else if (cedula.value.length > 10) {
        valido = false;
        mensaje("Cédula máximo 10 dígitos", cedula);
    }

    //validación para nombres
    if (nombres.value === "") {
        valido = false;
        mensaje("Nombre es requerido", nombres);
    } else if (!letra.test(nombres.value)) { 
        valido = false;
        mensaje("Nombre solo debe contener letras", nombres);
    } else if (nombres.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", nombres);
    }

    //validación para apellidos
    if (apellidos.value === "") {
        valido = false;
        mensaje("Nombre es requerido", apellidos);
    } else if (!letra.test(apellidos.value)) { 
        valido = false;
        mensaje("Nombre solo debe contener letras", apellidos);
    } else if (apellidos.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", apellidos);
    }

    //validación teléfono
    if (telefono.value === "") {
        valido = false;
        mensaje("Teléfono es requerido", telefono);
    } else if (!numero.test(telefono.value)) {
        valido = false;
        mensaje("Teléfono debe ser de 10 digitos", telefono);
    }

    //validación dirección
    if(direccion.value === ""){
        valido = false;
        mensaje("Dirección debe ser incluída", direccion);
    }else if(direccion.value.length > 100){
        valido = false;
        mensaje("La dirección ha excedido el rango requerido (100)");
    }

    //validacion género
    // let flag = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            flag = true;
            let res=radiosGenero[i].value;       
            break;
        }
    }
    if (!flag) {
        valido = false;
        mensaje("Debe seleccionar un genero", radiosGenero[0]);
    } 

    // validacion de fecha
    let dato=  fecha.value;
    let fechaN = new Date(dato);
    let anioN = fechaN.getFullYear();
    
    let anioA =fechaActual.getFullYear();    
    if(fechaN > fechaActual){
        valido = false;
        mensaje("Fecha no puede ser superior a la actual",fecha);
    }else if(anioN < 1930){
            valido = false;
            mensaje("Anio de nacimiento no puede ser menor a 1930",fecha);
    }else if((anioA - anioN) <18){
        valido = false;
            mensaje("Debe ser mayor de 18 años",fecha);
    }  

    //validacion email
    if (email.value === "") {
        valido = false;
        mensaje("Email es requerido", email);
    } else if (!correo.test(email.value)) {
        valido = false;
        mensaje("Email no es correcto", email);
    }

    //Estado civil
    if (estado.value === null || estado.value === '0') {
        valido = false;
        mensaje("No se ha seleccionado ningún estado", estado);
    }


    if(!valido){
        event.preventDefault();
    }
}  

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var mensajes = document.createElement("span");

    mensajes.textContent = cadenaMensaje;
    mensajes.style.color = "red";
    mensajes.display = "block";
    mensajes.setAttribute("class", "mensajeError");
    nodoPadre.appendChild(mensajes);
}

function borrarMensajes(){
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();
    }
}

function mostrarCampos(){
    document.getElementById('radioUniversidad').style.display = 'block';
}

function ocultarCampos(){
    document.getElementById('radioUniversidad').style.display = 'none';
}

function mostrarCalendario(){
    document.getElementById('graduadoA').style.display = 'block';
    document.getElementById('enCursoCampos').style.display = 'none';
}
function mostrarCamposGraduado(){
    document.getElementById('enCursoCampos').style.display = 'block';
    document.getElementById('graduadoA').style.display = 'none';
}

const botonE = document.getElementById('botonE');
botonE.addEventListener('click', ()=>{
    let agregarExperiencia = document.getElementById("agregarExperiencia");

    let div = document.createElement("div");
    div.setAttribute("class", "experiencias");
    agregarExperiencia.appendChild(div);

    let div1 = document.createElement("div");
    div.appendChild(div1);

    let nodoLabel = document.createElement("label");
    nodoLabel.innerText = "Empresa:";
    div1.appendChild(nodoLabel);
    
    let nodoInput = document.createElement("input");
    div1.appendChild(nodoInput);  

    let div2 = document.createElement("div");
    div.append(div2);

    let nodoLabel1 = document.createElement("label");
    nodoLabel1.innerText = "Puesto:";
    div2.append(nodoLabel1);

    let nodoInput1 = document.createElement("input");
    div2.append(nodoInput1);

    let div3 = document.createElement("div");
    div.append(div3);

    let actividades = document.createElement("label");
    actividades.innerText = "Actividades:";
    div3.append(actividades);

    let textArea = document.createElement("textarea");
    div3.append(textArea);

    
});

const botonR = document.getElementById('botonR');
botonR.addEventListener('click', ()=>{
    let agregarReferencia = document.getElementById('agregarReferencia');

    let div = document.createElement("div");
    div.setAttribute("class", "referencias");
    agregarReferencia.appendChild(div);

    let div1 = document.createElement("div");
    div.appendChild(div1);

    let empresa = document.createElement("label");
    empresa.innerText = "Empresa:";
    div1.appendChild(empresa);
  
    let empresaInput = document.createElement("input");
    div1.appendChild(empresaInput);
    
    let div2 = document.createElement("div");
    div.appendChild(div2);
    
    let jefe = document.createElement("label");
    jefe.innerText = "Encargado:";
    div2.appendChild(jefe);
    
    let jefeInput = document.createElement("input");
    div2.appendChild(jefeInput);

    let div3 = document.createElement("div");
    div.appendChild(div3);
    
    let telefono = document.createElement("label");
    telefono.innerText = "Telefono:";
    div3.appendChild(telefono);
    
    let telefonoInput = document.createElement("input");
    div3.appendChild(telefonoInput);
});

const botonQ = document.getElementById("botonQ");
botonQ.addEventListener('click', ()=>{
    let quitarExperiencia = document.getElementById("agregarExperiencia");

    quitarExperiencia.removeChild(quitarExperiencia.lastChild);
});

const botonQR = document.getElementById("botonQR");
botonQR.addEventListener('click', ()=>{
    let quitarReferencia = document.getElementById("agregarReferencia");

    quitarReferencia.removeChild(quitarReferencia.lastChild);
});

