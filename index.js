addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

/*eventos*/

//VARIABLES

const btnCierra = document.querySelector('#btn-cierra');

const btnAdelanta = document.querySelector('#btn-adelanta');

const btnRetrocede = document.querySelector('#btn-retrocede');

const imagenes = document.querySelectorAll('#galeria img');

const lightbox = document.querySelector('#contenedor-principal');

const imagenActiva = document.querySelector('#img-activa');

let indiceImagen = 0;

// Abre el lightbox

const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';  
    indiceImagen = Array.from(imagenes).indexOf(event.target);  
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});

/* Cierra el lightbox*/

btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

/* Adelantar imagen */

const adelantaImagen = () => {
    if(indiceImagen === imagenes.length - 1) {
        indiceImagen = -1;
    };
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/* Retrocede imagen*/

const retrocedeImagen = () => {
    if(indiceImagen === 0) {
        indiceImagen = imagenes.length;
    };
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);



