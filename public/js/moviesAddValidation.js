window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputs = document.querySelectorAll('.inputs');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let errores = [];
let ulErrores = document.querySelector('.errores');
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('blur', function(e){
        if(inputs[i].value == '') { 
        inputs[i].classList.add('is-invalid');
        errores.push('Debes completar el campo ' + inputs[i].name);
        ulErrores.innerHTML += '<li>' + errores[i] + '<li>'
    }
        if(inputs[i].name == 'rating' || inputs[i].name == 'awards'){
            if (inputs[i].value > 0 && inputs[i].value <= 10){
                inputs[i].classList.add('is-valid')
            }
        }
    })
}


formulario.addEventListener('submit', function(e){

    let errores = [];

    let campoTitulo = document.querySelector('#title');
    if (campoTitulo.value == ''){
        errores.push("El campo de título debe estar completo")
        campoTitulo.classList.add('is-invalid');
    }

    let campoRating = document.querySelector('#rating');
    if (campoRating.value == ''){
        errores.push("El campo de calificación debe estar completo")
        campoRating.classList.add('is-invalid');
    }

    let campoAwards = document.querySelector('#awards');
    if (campoAwards.value == ''){
        errores.push("El campo de premios debe estar completo")
        campoAwards.classList.add('is-invalid');
    }

    let campoDate = document.querySelector('#release_date');
    if (campoDate.value == ''){
        errores.push("El campo de fecha de creación debe estar completo")
        campoDate.classList.add('is-invalid');
    }

    let campoDuration = document.querySelector('#length');
    if (campoDuration.value == ''){
        errores.push("El campo de duración debe estar completo")
        campoDuration.classList.add('is-invalid');
    }

    
    let campoGenre = document.querySelector('#genre_id');
    if (campoGenre.value == ''){
        errores.push("El campo de género debe estar completo")
        campoGenre.classList.add('is-invalid');
    }

    console.log(campoTitulo)
    if (errores.length > 0) {
        e.preventDefault();
       
        let ulErrores = document.querySelector('.errores');
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += '<li>' + errores[i] + '<li>'
        }
    }


})


}