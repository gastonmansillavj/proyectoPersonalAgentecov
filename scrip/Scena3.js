class Scena3 extends Phaser.Scene {
    constructor(){

        super('juego2')
    }
    
        create(){
        ///// escenario///////
        tiled = this.add.tileSprite(800,300,2700,600,'fondoParalax')
        /////prueba pantalla completa
        

        /*
            platforms = this.physics.add.staticGroup();
            platforms.create(600, 400, 'ground');
            platforms.create(750, 220, 'ground');
            platforms.create(100, 250, 'ground');
            platforms.create(200,400, 'ground');
            platforms.create(400,250, 'ground');
            // plataformas
            
*/
        // piso//////////
            Piso = this.physics.add.staticGroup({
                key: 'suelo',
                repeat: 25,
                setXY: { x: 0, y: 500, stepX: 128 }
            });
            /////////calle////////
            calle = this.physics.add.staticGroup({
                key: 'calle',
                repeat: 10,
                setXY: { x: 0, y: 500, stepX: 800 }
            });

            ///grupo plataformas///

            platforms = this.physics.add.staticGroup();

            

            ///// edificios//////
           casas = this.physics.add.staticGroup();
           
           let PosCasa = 100;

            for (let index = 0; index < 7; index++) {

                numCasas = Phaser.Math.Between(1, 6);

                if( index == 6){
                    numCasas=0;
                   
                }
                
                if (numCasas===0) {
                    platforms.create(PosCasa+12,330,'hitBoxPlataforma').body.setSize(188, 20,0);
                    casas.create(PosCasa,285, 'edificio2PisosRojo');
                    PosCasa= PosCasa+ Phaser.Math.Between(250,350);

               
                }
               else if (numCasas===1) { 
              
                

                platforms.create(PosCasa+5,300,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 310, 'casaRoja');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

               }

               else if (numCasas===2) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 315, 'casaAmarilla');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===3) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioAmarillo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===4) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioRojo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }
            else if (numCasas===5) { 
                platforms.create(PosCasa+5,310,'hitBoxPlataforma').body.setSize(200, 20,0);
                platforms.create(PosCasa+5,192,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 200, 'edificioVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }

            else{
                
                platforms.create(PosCasa+5,315,'hitBoxPlataforma').body.setSize(200, 20,0);
                casas.create(PosCasa, 320, 'casaVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
        


            }
            ///////oculto las plataformas/////

            platforms.children.iterate(function (child) {
               
               child.visible = false ;

            });
            


            ///////////hitbox player///////////////////
            jugador = this.physics.add.sprite(100, 200, 'playerHitbox');
            jugador.setBounce(0.2);
            /////// desaparecer hit box personaje///// 
            jugador.visible = false ;
            //jugador.setCollideWorldBounds(true);
            jugador.setScale(0.2,0.5);
            //jugador.body.setSize(15, 35,0,0);
            vidaJugador= 5
            textoVidaJugador =this.add.text(350, 16, 'Vida jugador 5', { fontSize: '15px', fill: '#994500' });


            //////////// hitbox abuela///////////
            Anciana = this.physics.add.sprite(100, 200, 'ancianHitbox'); 
            //jugador.setCollideWorldBounds(true);
            Anciana.setScale(0.6,0.7);
            //jugador.body.setSize(15, 35,0,0);

            /////// desaparecer hit box personaje///// 
            Anciana.visible = false ;
            //////////////
            vidaAnciana= 5;
            textoVidaAnciana = this.add.text(350, 35, 'Vida anciana 5', { fontSize: '15px', fill: '#994500' });
            animacionAnciana = this.add.sprite(400, 450, 'animacionAnciana').setScale(0.4,0.4);
            animacionAnciana.anims.play('ancianaCamina', true)

            ////////// animaciones player/////////////////////////
            animacionPlayer = this.add.sprite(100, 450, 'animacionJugador');
            animacionPlayer.setScale(2)
            // camara 
            camaraPringipal = this.cameras.main.setBounds(0,0,2000,600);
            camaraPringipal.startFollow(jugador);

            animacionPlayer.on('animationcomplete', ()=>{ 
                Atacando=false
                console.log("termino")
            });

        //////////////////////////covidEnemigos////////////////////////
      


        covidRojo = this.physics.add.group({
            key: 'covidRojo',
            repeat: 20,
            setXY: { x: 500, y: 350, stepX:Phaser.Math.Between(150,250) }        
        });

        covidRojo.children.iterate(function (child) { 
            child.setBounceY(1);
            child.setScale(0.4);

            child.on('animationcomplete', ()=>{           
                child.anims.play('reboteCovidArriba', true);
                
            });

        });
////////////////////////////////// civil//////////////////////////////////////
       
civil = this.physics.add.group({

    key: 'civil',
    repeat: 2,
    setXY: { x: 450, y: 250, stepX:Phaser.Math.Between(150,250) } 
          
});

civil.children.iterate(function (child) { 
    child.setScale(0.4);
    child.anims.play('civilConBarbijo', true)
   
});



        ////////////grupo covid verde/////////////////////////////////////

        

        covidVerde = this.physics.add.group({
            key: 'covidVerde',
            repeat: 20,
            setXY: { x: 450, y: 250, stepX:Phaser.Math.Between(150,250) }        
        });


        covidVerde.children.iterate(function (child) { 
            child.setScale(0.4);
            child.disparoListo=false;
        });

        disparoCovidVerde = this.physics.add.group();
        
            //////////////// items de la calle//////////////////
            
            faro = this.physics.add.staticGroup({
                key: 'faro',
                repeat: 10,
                setXY: { x: 50, y: 390, stepX:400 }
            });

            Letrero = this.physics.add.staticGroup({
                key: 'letrero',
                repeat: 10,
                setXY: { x: 300, y: 450, stepX: 600 }
            });
            BocaIncendio = this.physics.add.staticGroup({
                key: 'bocaIncendio',
                repeat: 10,
                setXY: { x: 200, y: 470, stepX:430 }
            });


              ///////// botones///////////////////////////////// 
              btnAtaque=this.input.keyboard.addKey('A');
            
              if (cursors =! undefined){
                  
                  cursors = this.input.keyboard.createCursorKeys();
              }
             /*   
            botonDer= this.add.sprite(200, 500, 'flecha');
            botonDer.setInteractive();
            botonDer.on('pointerover', function (event) {
               botonMueveDer=true;
            });
            botonDer.on('pointerout', function (event) {
                botonMueveDer=false;
            });

            botonIzq= this.add.sprite(90, 500, 'flecha');
            botonIzq.flipX=true;
            botonIzq.setInteractive();
            botonIzq.on('pointerover', function (event) {
               botonMueveIzq=true;
            });
            botonIzq.on('pointerout', function (event) {
                botonMueveIzq=false;
             });

            botonSalto= this.add.sprite(600, 500, 'boton');
            botonSalto.setScale(0.6);
            botonSalto.setInteractive();
            botonSalto.on('pointerover', function (event) {
                botonMueveArriba=true;
             });
             botonSalto.on('pointerout', function (event) {
                 botonMueveArriba=false;
              });
*/
              //////////////////////////////////////////
              
              
  
           /*
            //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
            stars = this.physics.add.group({
                key: 'star',
                repeat: 11,
                setXY: { x: 12, y: 0, stepX: 70 }
            });

            stars.children.iterate(function (child) {

                //  Give each star a slightly different bounce
                child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

            });

            // nuevas estrellas 
            starsRosa = this.physics.add.group({
                key: 'EstrellaRoja',
                repeat: 4,
                setXY: { x: 12, y: 0, stepX: 200 }
            });

            starsRosa.children.iterate(function (child) {

                //  Give each star a slightly different bounce
            // child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            
            child.setScale(0.32)
            //child.setBounceY(1);
            child.body.bounce.setTo(1, 1);
            child.setCollideWorldBounds(true);
            child.setVelocity(Phaser.Math.Between(-200, 200), 20);
            child.anims.play('estrellaConAnimacion', true);
            
            });

            ///////////// bomba

            bombs = this.physics.add.group();

            //  The score
        
            scoreText = this.add.text(350, 16, 'Score: 0', {fontFamily:'Mandhor-ALEmp', fontSize: '32px', fill: '#994500' });
            indicaciones = this.add.text(10,10, 'Presiona la tecla R para reiniciar', {fontFamily:'Mandhor-ALEmp', fontSize: '15px', fill: '#994500' });
            // efecto sonido 
            this.FxJuntaEstrella = this.sound.add('juntaEstrellas');
            this.FxJuntaEstrellaChica = this.sound.add('juntaEstrellasChica');
            this.FxExplosion = this.sound.add('Explosion');
            
            //  Collide the player and the stars with the platforms
            
            this.physics.add.collider(stars, platforms);
            this.physics.add.collider(stars, Piso);
            this.physics.add.collider(starsRosa, platforms);
            this.physics.add.collider(starsRosa, starsRosa);
            this.physics.add.collider(bombs, platforms);

            //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
            this.physics.add.overlap(player,stars,this.collectStar, null, this);
            this.physics.add.overlap(player,starsRosa,this.collectStarRosa, null, this);
            this.physics.add.collider(player,bombs,this.hitBomb, null, this);
            this.physics.add.collider(player,platforms,this.activaSalto, null, this);
            */


            // pantalla completa 
            //this.scale.startFullscreen();
           
            /// gui/////
            Textos=this.add.text();
            Textos.Score= this.add.text(100,25, "Score: 0", {
                font: "25px Arial",
                fill: "#FFFFFF",
                align: "center",
                stroke: "#de77ae",
                strokeThickness: 10
            });
            Textos.Tiempo = this.add.text(600,25, "tiempo: 1", {
                font: "25px Arial",
                fill: "#FFFFFF",
                align: "center",
                stroke: "#de77ae",
                strokeThickness: 10
            }); 

            
        TiempoJuego = this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });



            // colision civil
            this.physics.add.collider(civil,Piso);

           //colisiones Anciana
           this.physics.add.collider(Anciana,Piso);
           
           

           // colisiones jugador
            this.physics.add.collider(jugador,Piso,this.activaSalto, null, this);
            this.physics.add.collider(jugador,platforms,this.activaSalto, null, this);
            // colisiones covid
            this.physics.add.collider(covidRojo,covidRojo);
            this.physics.add.collider(covidRojo,platforms,this.activaAnimacionCovRojo, null, this);
            this.physics.add.collider(covidRojo,Piso,this.activaAnimacionCovRojo, null, this);
            this.physics.add.overlap(disparoCovidVerde,Piso,this.destruyeCovidVerde, null, this);
            this.physics.add.collider(covidVerde,platforms);
            this.physics.add.collider(covidVerde,Piso);
   
       
        }
      update ()
    {
        
       /////////controles/////////
      // botonDer.setScrollFactor (0);
      // botonIzq.setScrollFactor (0);
      // botonSalto.setScrollFactor (0);


      ///////////  gui/////
      Textos.Tiempo.text= "tiempo : " + temporizadorDeJuego
      Textos.Tiempo.setScrollFactor (0);
      Textos.Score.setScrollFactor (0);
      if (temporizadorDeJuego==0) {
        TiempoJuego.paused = true;
      }
      

        ///////////// personaje principal/////////////////////////////////////////
        
        textoVidaJugador.x=jugador.x-60
        textoVidaJugador.y=jugador.y-50
        textoVidaJugador.setText('Vida jugador '+vidaJugador)

        if (btnAtaque.isDown&&saltoAct === true)
        {   
            
            animacionPlayer.anims.play('atacar', true)
            Atacando=true;
                      
            
        }

         if (cursors.left.isDown)
        {
            if(Atacando === false){
                jugador.setVelocityX(-160);
                animacionPlayer.flipX=true;
    
                if (jugador.body.touching.down) {
                    animacionPlayer.anims.play('caminar', true);
                }

            }
            else{

                jugador.setVelocityX(0);


            }         
        }
        else if (cursors.right.isDown)
        {
                    if(Atacando === false){
                    jugador.setVelocityX(160);
                    animacionPlayer.flipX=false;
            
                            if (jugador.body.touching.down) {
                            animacionPlayer.anims.play('caminar', true);     

                            }

                    }
                    else{

                        jugador.setVelocityX(0);

                    }
            
      
        }

        
        else
        {   
            if( jugador.body.touching.down && Atacando === false){
                jugador.setVelocityX(0);
                animacionPlayer.anims.play('parado');                
            }
           
        }

        if (cursors.up.isDown&& saltoAct === true && Atacando===false &&jugador.body.touching.down )
        {
            jugador.setVelocityY(-600);    
            animacionPlayer.anims.play('saltar');
            saltoAct=false;  

        }

        if (animacionPlayer.flipX===false) {
            animacionPlayer.x=jugador.x+17;
            animacionPlayer.y=jugador.y-15;
            
        } else {

            animacionPlayer.x=jugador.x-17;
            animacionPlayer.y=jugador.y-15;
            
        }

        
        //// covid rojo ia //


        covidRojo.children.iterate(function (child) { 
            
          
           
            if (Phaser.Math.Distance.BetweenPoints(Anciana, child)<=350 ) {
               
                child.setTint(0xff0000);

                if (Anciana.x<child.x) {
                    child.setVelocityX (-100)
                    
                } else {
                    child.setVelocityX (100)
                }
                
            } else {
                child.setVelocityX (0)
                
            }
        });


       tiempo =tiempo+1;
       

       covidVerde.children.iterate(function (child) { 

        
            if ((Phaser.Math.Distance.BetweenPoints(jugador,child)<=350 ) ) {
                child.setTint(0xff0000);
                child.disparoListo = true;
                
                    if(tiempo >= 150 ) { 

                        covidVerde.children.iterate(function (child) { 
                           
                            if (child.disparoListo=== true){
                                
                                disparoCovidVerde.create(child.x,child.y, 'disparoVerde')

                                disparoCovidVerde.children.iterate(function (child) {
      
                                        if (jugador.x<child.x) {

                                            child.setVelocity((jugador.x-child.x)+70,-600);
                                            //child.setVelocity((jugador.x-child.x),-800+(jugador.x-child.x)*-1)

                                        } 
                                        
                                        else {
                                             child.setVelocity((jugador.x-child.x)-70,-600);

                                        
                                        }

                                       
                                    });

                                
                            
                                child.disparoListo=false;

                            }

                             

                        });
                        
                        

                        tiempo=0;
                    }

                

            }
            else {

                child.clearTint();
            
            }

        });

       
      
     
        // anciana 
        Anciana.setVelocityX(10);
        textoVidaAnciana.setText('Vida anciana '+vidaAnciana)
        textoVidaAnciana.x=Anciana.x-60
        textoVidaAnciana.y=Anciana.y-60
        //// animacion anciana
        animacionAnciana.x=Anciana.x+10;
        animacionAnciana.y=Anciana.y;
      
       

        }
               
        activaSalto(player,platform) {
            
            saltoAct = true;
        }

        activaAnimacionCovRojo(covidRojo){
            if(covidRojo.body.touching.down)
            {
                covidRojo.anims.play('reboteCovidAbajo', true);
            }
            

        }
        destruyeCovidVerde(disparoCovidVerde,Piso){

            disparoCovidVerde.destroy();

        }
        cadaSegundo( ){

            temporizadorDeJuego = temporizadorDeJuego - 1
            
        }
       
       
            

        
     
        

/*
        collectStarRosa (player, starRosa)
        {   this.FxJuntaEstrella.play()
            starRosa.disableBody(true, true);
            score += 15;
            scoreText.setText('Score: ' + score);
            if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
            {
                //  A new batch of stars to collect
                this.activaEstrellas()
                this.crearBombas()
            }
    }
        collectStar (player, star)
        {   this.FxJuntaEstrellaChica.play()
            star.disableBody(true, true);
            //  Add and update the score
            score += 10;
            scoreText.setText('Score: ' + score);
            if (stars.countActive(true) === 0 && starsRosa.countActive(true) === 0)
            {
                this.activaEstrellas()
                this.crearBombas()
            }
        }
        hitBomb (player, bomb)
        {   this.FxExplosion.play()
            this.gameOver()
        }

        gameOver (){

            this.physics.pause();
            player.setTint(0xff0000);
            player.anims.play('idleKnigt');
            var gameOverButton = this.add.text(700, 500, 'Game Over', {fontFamily:'Mandhor-ALEmp', fontSize: '100px', fill: '#000' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('fin'));
            Phaser.Display.Align.In.Center(gameOverButton, this.add.zone(400, 300, 800, 600));
        }

        crearBombas(){
            
            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }

    activaEstrellas(){
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        starsRosa.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);
            child.setVelocity(Phaser.Math.Between(-200, 200), 20);

        });
   }
   */

}  
