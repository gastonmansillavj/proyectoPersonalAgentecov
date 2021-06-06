class Scena1 extends Phaser.Scene {
    constructor(){
        super('menu')
    }


     preload ()

{
    // personajes 
    this.load.spritesheet('animacionAnciana', '../src/assets/spritesheet/anciana.png', { frameWidth: 48, frameHeight: 64 });
    this.load.spritesheet('animacionJugador', '../src/assets/spritesheet/player.png', { frameWidth: 48.25, frameHeight: 50 });
    this.load.image('playerHitbox', '../src/assets/spritesheet/box.png');
    this.load.image('ancianHitbox', '../src/assets/spritesheet/boxAnciana.png');
    this.load.image('logo', '../src/assets/imagenes/phaser3.png');
    this.load.image('suelo', '../src/assets/spritesheet/suelo.png');
    this.load.image('fondoParalax', '../src/assets/imagenes/tiledAgentecov1600x600.png');
    this.load.image('calle', '../src/assets/imagenes/calleAgenteCov800x600.png');
    this.load.image('casaAmarilla', '../src/assets/imagenes/casaAmarilla.png');
    this.load.image('casaRoja', '../src/assets/imagenes/casaRoja.png');
    this.load.image('casaVerde', '../src/assets/imagenes/casaVerde.png');
    this.load.image('kiosko', '../src/assets/imagenes/kiosko.png');
    this.load.image('edificioVerde', '../src/assets/imagenes/edificioVerde.png');
    this.load.image('edificioRojo', '../src/assets/imagenes/edificioRojo.png');
    this.load.image('edificioAmarillo', '../src/assets/imagenes/edificioAmarillo.png');
    this.load.image('edificio2PisosRojo', '../src/assets/imagenes/EdificioRojoConToldo.png');
    this.load.image('faro', '../src/assets/imagenes/faro.png');
    this.load.image('letrero', '../src/assets/imagenes/letrero.png');
    this.load.image('flecha', '../src/assets/imagenes/flecha.png');
    this.load.image('bocaIncendio', '../src/assets/imagenes/bocaIncendio.png');
    this.load.image('boton', '../src/assets/imagenes/boton.png');
    /*this.load.image('sky', '../src/assets/BG.png');
    this.load.image('reset', '../src/assets/botonReset.png');
    this.load.image('logo', '../src/assets/phaser3.png');
    this.load.image('ground', '../src/assets/Tile/plataformaUnida.png');
    this.load.image('star', '../src/assets/star.png');
    this.load.image('starRosa', '../src/assets/StarRosa.png');
    this.load.image('bomb', '../src/assets/bomb.png');
    this.load.spritesheet('knigtRed', '../src/assets/dark_soldier-overlord.png', { frameWidth: 48, frameHeight: 64 });
    this.load.image('puntaIzq', '../src/assets/Tile/1.png');
    this.load.image('puntaDer', '../src/assets/Tile/3.png');
    this.load.spritesheet('EstrellaRoja', '../src/assets/estrella3d.png', { frameWidth: 128, frameHeight: 128 });
    

    this.load.audio('juntaEstrellas', ['../src/audio/estrellas.mp3']);
    this.load.audio('juntaEstrellasChica', ['../src/audio/estrellaChica.mp3']);
    this.load.audio('Explosion', ['../src/audio/Explosion.mp3']);
*/
}

create ()

{   
 
// ANIMACION DE JUGADOR


    this.anims.create({
        key: 'caminar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 80, end: 85 }),
        frameRate: 15,
        repeat: 0
    });


    this.anims.create({
        key: 'atacar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 16, end: 23 }),
        frameRate: 20,
        repeat: 0
    });

    this.anims.create({
        key: 'parado',
        frames: [ { key: 'animacionJugador', frame: 1 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'saltar',
        frames: this.anims.generateFrameNumbers('animacionJugador', { start: 40, end:45 }),
        frameRate: 4,
        repeat: 0
    });


    
    //  Input Events
    
    var logo = this.add.image(400, 300, 'logo').setScale(0.5).setTint(0xff0000);;
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );
      

      logo.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    logo.on('pointerover', function (event) {

        this.clearTint();

    });
    
}

   
}