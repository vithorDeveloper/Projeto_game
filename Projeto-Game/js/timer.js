var puntos = 0,
        movimientos = 0,
        tiempoJuego = 120, 
        tiempoRestante,
        tiempo,
        indColor = 0,
        indEstado = 0,
        figValidas = 0;
colores = ['white', 'yellow'];
dimension = 7;
var arrayImagenes = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png'];
var puntuacion = [10, 50, 75, 100, 150, 200, 250,300,325,350,375,400,425,450];
var cantidadImagenes = arrayImagenes.length;
var matriz = [];

$(function () {


    var cambiarTitulo = function () {
        setInterval(function () {
            if (indColor === colores.length)
                indColor = 0;
            $('.main-titulo').css('color', colores[indColor]);
            indColor++;
        }, 1000);
    };

    function contadorTiempo() {
        tiempoRestante -= 1;
        console.log(tiempoRestante);
        actualizarTiempo();
        if (tiempoRestante === 0) {
            return finalizacion();
        }
        tiempo = setTimeout(contadorTiempo, 1000);
    }

    function actualizarTiempo() {
        $('#timer').html(formatoTiempo(tiempoRestante));
    }

    
    var temporizador = function () {
        var $timer,
                tiempo = 1000;
        incrementador = 70,
                actualizarTiempo = function () {
                    $timer.html(formatTime(tiempo));
                    if (tiempo === 0) {
                        temporizador.Timer.stop();
                        return;
                    }
                    tiempo -= incrementador / 10;
                    if (tiempo < 0) {
                        tiempo = 0;
                        tiempoCompleto();
                    }

                },
                tiempoCompleto = function () {
                    alert('Tiempo completado');
                },
                init = function () {
                    $timer = $('#timer');
                    temporizador.Timer = $.timer(actualizarTiempo, incrementador, true);
                };
        this.restaurarTiempo = function () {
            temporizador.Timer = $.timer();
        };
        $(init);

    };



    $(function () {
        cambiarTitulo();
        cargarTablero();
    });


    function pad(number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    function formatoTiempo(time) {
        var min = parseInt(time / 60),
                sec = time - (min * 60);
        console.log((min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2));
        return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
    }
}());