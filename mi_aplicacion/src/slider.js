$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Cambiar la imagen cada 2 segundos
        arrows: false, // Ocultar las flechas de navegación
        dots: true, // Mostrar los puntos de navegación
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // Cambiar opciones para dispositivos con ancho de pantalla menor a 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});