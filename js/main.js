//Para poder mostrar las flores, se debe eliminar la clase container
onload = () =>{
    document.body.classList.remove("container");
};


//Slider Proyecto 1
const btnizq = document.querySelector(".btn_izq"), 
        btnder = document.querySelector(".btn_der"), 
        slider = document.querySelector(".slider"),
        imagen = document.querySelectorAll(".imagen");


btnizq.addEventListener("click", e => moverIzquierda())
btnder.addEventListener("click", e => moverDerecha())

setInterval(() => {
    moverDerecha()
}, 3000)


let operacion = 0, contador = 0;

function moverDerecha() {
    if (contador >= imagen.length-1) {
        contador = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
    } else {
        contador++;

        operacion = operacion + 33.3;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }
}

function moverIzquierda() {
    if (contador <= 0) {
        contador = imagen.length-1;
        operacion = 33.3 * (imagen.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
    } else {
        contador--;

        operacion = operacion - 33.3;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s"
    }
}


//Slider Proyecto 2
const btnizq2 = document.querySelector(".btn_izq2"), 
        btnder2 = document.querySelector(".btn_der2"), 
        slider2 = document.querySelector(".slider2"),
        imagen2 = document.querySelectorAll(".imagen2");

btnizq2.addEventListener("click", e => moverIzquierda2())
btnder2.addEventListener("click", e => moverDerecha2())

setInterval(() => {
    moverDerecha2()
}, 3000)


let operacion2 = 0, contador2 = 0;

function moverDerecha2() {
    if (contador2 >= imagen2.length-1) {
        contador2 = 0;
        operacion2 = 0;
        slider2.style.transform = `translate(-${operacion2}%)`;
    } else {
        contador2++;

        operacion2 = operacion2 + 33.3;
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "all ease .6s"
    }
}

function moverIzquierda2() {
    if (contador2 <= 0) {
        contador2 = imagen2.length-1;
        operacion2 = 33.3 * (imagen2.length-1);
        slider2.style.transform = `translate(-${operacion2}%)`;
    } else {
        contador2--;

        operacion2 = operacion2 - 33.3;
        slider2.style.transform = `translate(-${operacion2}%)`;
        slider2.style.transition = "all ease .6s"
    }
}


//Slider Hobbies
const btnizq3 = document.querySelector(".btn_izq3"), 
        btnder3 = document.querySelector(".btn_der3"), 
        slider3 = document.querySelector(".slider3"),
        imagen3 = document.querySelectorAll(".imagen3");

btnizq3.addEventListener("click", e => moverIzquierda3())
btnder3.addEventListener("click", e => moverDerecha3())

setInterval(() => {
    moverDerecha3()
}, 3000)


let operacion3 = 0, contador3 = 0;

function moverDerecha3() {
    if (contador3 >= imagen3.length-1) {
        contador3 = 0;
        operacion3 = 0;
        slider3.style.transform = `translate(-${operacion3}%)`;
    } else {
        contador3++;

        operacion3 = operacion3 + 33.3;
        slider3.style.transform = `translate(-${operacion3}%)`;
        slider3.style.transition = "all ease .6s"
    }
}

function moverIzquierda3() {
    if (contador3 <= 0) {
        contador3 = imagen3.length-1;
        operacion3 = 33.3 * (imagen3.length-1);
        slider3.style.transform = `translate(-${operacion3}%)`;
    } else {
        contador3--;

        operacion3 = operacion3 - 33.3;
        slider3.style.transform = `translate(-${operacion3}%)`;
        slider3.style.transition = "all ease .6s"
    }
}