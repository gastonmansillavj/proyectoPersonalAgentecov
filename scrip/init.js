var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
        width: 800, //ancho de la pantalla.
        height: 600, //alto de la pantalla.
      },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: true
        }
    },
    scene:[Scena1,Scena2] //,Scena2,Scena3
};

var game = new Phaser.Game(config)
/////////personajes//////////
var jugador;
var animacionPlayer;
var vidaJugador;
var Atacando=false;/// controla la animacion de ataque
var tempAnimAtaque;
var Anciana;
var animacionAnciana;
var vidaAnciana;
var covid1;
///////////// power ups////////
var jeringa;
var barbijo;
////////////// armas/////////
var rociador;
//escenario
var platforms;
var Piso;
// controles
var cursors;
var btnAtaque;
var botonDer;
var botonMueveDer;
var botonIzq;
var botonMueveIzq;
var botonSalto;
var botonMueveArriba;
var botonAtaque;
var botonEspecial;
// control de datos
var saltoAct=false;
//puntos
var textoVidaJugador;
var textoVidaAnciana;
// opciones de juegos
var camaraPringipal;
var gameOver = false;
var FxJuntaEstrella;
var FxJuntaEstrellaChica;
var FxExplosion;
/// fondo///
var tiled;
var calle;
var casas;
var numCasas;
var faro;
var Letrero;
var BocaIncendio;
