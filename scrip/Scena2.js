class Scena2 extends Phaser.Scene {
    constructor(){

        super('juego')
    }
    
        create(){
        ///// escenario///////
        tiled = this.add.tileSprite(800,300,1600,600,'fondoParalax')

        /*
            platforms = this.physics.add.staticGroup();
            platforms.create(600, 400, 'ground');
            platforms.create(750, 220, 'ground');
            platforms.create(100, 250, 'ground');
            platforms.create(200,400, 'ground');
            platforms.create(400,250, 'ground');
            // plataformas
            
*/
        // piso
            Piso = this.physics.add.staticGroup({
                key: 'suelo',
                repeat: 25,
                setXY: { x: 0, y: 500, stepX: 128 }
            });

            calle = this.physics.add.staticGroup({
                key: 'calle',
                repeat: 10,
                setXY: { x: 0, y: 500, stepX: 800 }
            });

           casas = this.physics.add.staticGroup();
           
           let PosCasa = 100;

            for (let index = 0; index < 8; index++) {

                numCasas = Phaser.Math.Between(0, 6);
               
                if (numCasas===0) {
                casas.create(PosCasa, 310, 'casaRoja');
                PosCasa= PosCasa+ Phaser.Math.Between(200,350);
                }
               else if (numCasas===1) { 

                casas.create(PosCasa, 320, 'casaVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(200,350);

               }

               else if (numCasas===2) { 

                casas.create(PosCasa, 315, 'casaAmarilla');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===3) { 
                casas.create(PosCasa, 200, 'edificioAmarillo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            else if (numCasas===4) { 
                casas.create(PosCasa, 200, 'edificioRojo');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }
            else if (numCasas===5) { 
                casas.create(PosCasa, 200, 'edificioVerde');
                PosCasa= PosCasa+ Phaser.Math.Between(250,350);
            }

            else{

                    casas.create(PosCasa,285, 'edificio2PisosRojo');
                    PosCasa= PosCasa+ Phaser.Math.Between(250,350);

            }
            


            }


            ///////////hitbox player///////////////////
            jugador = this.physics.add.sprite(100, 200, 'playerHitbox');
            jugador.setBounce(0.2); 
            //jugador.setCollideWorldBounds(true);
            jugador.setScale(0.2,0.5);
            //jugador.body.setSize(15, 35,0,0);
            vidaJugador= 5
            textoVidaJugador =this.add.text(350, 16, 'Vida jugador 5', { fontSize: '15px', fill: '#994500' });



            //////////// hitbox abuela///////////
            Anciana = this.physics.add.sprite(100, 200, 'ancianHitbox'); 
            //jugador.setCollideWorldBounds(true);
            Anciana.setScale(0.5,0.7);
            //jugador.body.setSize(15, 35,0,0);
            vidaAnciana= 5;
            textoVidaAnciana = this.add.text(350, 35, 'Vida anciana 5', { fontSize: '15px', fill: '#994500' });


            ////////// animaciones player/////////////////////////
            animacionPlayer = this.add.sprite(100, 450, 'animacionJugador');
            animacionPlayer.setScale(2)
            // camara 
            this.cameras.main.setBounds(0,0,2000,600);
            this.cameras.main.startFollow(jugador);

            animacionPlayer.on('animationcomplete', ()=>{ 
                Atacando=false
                console.log("termino")
            });
            
   
          

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
           //colisiones Anciana
           this.physics.add.collider(Anciana,Piso);

           // colisiones jugador
            this.physics.add.collider(jugador,Piso,this.activaSalto, null, this);
            botonDer= this.add.sprite(400, 300, 'flecha');
            botonDer.setInteractive()
            
            botonDer.on('pointerover', function (event) {
               botonMueveDer=true;
            });
            botonDer.on('pointerout', function (event) {
                botonMueveDer=false;
             });
            
       
        }
      update ()
    {
        

        ///////////// personaje principal/////////////////////////////////////////
        
        textoVidaJugador.x=jugador.x-60
        textoVidaJugador.y=jugador.y-50
        textoVidaJugador.setText('Vida jugador '+vidaJugador)

        if (btnAtaque.isDown&&saltoAct === true)
        {   
            
            animacionPlayer.anims.play('atacar', true)
            Atacando=true;
            
            
            
        }

         if (cursors.left.isDown )
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
        else if (cursors.right.isDown||botonMueveDer===true )
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

        if (cursors.up.isDown&&saltoAct === true && Atacando===false )
        {
            jugador.setVelocityY(-600);    
            animacionPlayer.anims.play('saltar');
            saltoAct = false;  

        }

        if (animacionPlayer.flipX===false) {
            animacionPlayer.x=jugador.x+17;
            animacionPlayer.y=jugador.y-15;
            
        } else {

            animacionPlayer.x=jugador.x-17;
            animacionPlayer.y=jugador.y-15;
            
        }

        // anciana 
        Anciana.setVelocityX(10);
        textoVidaAnciana.setText('Vida anciana '+vidaAnciana)
        textoVidaAnciana.x=Anciana.x-60
        textoVidaAnciana.y=Anciana.y-60
      
        

        }
               
        activaSalto(player,platform) {
            saltoAct = true;
        }

        moverDer(){
            botonMueveDer=true;
            console.log(botonMueveDer)

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