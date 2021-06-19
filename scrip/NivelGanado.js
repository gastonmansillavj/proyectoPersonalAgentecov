class NivelGanado extends Phaser.Scene {
    constructor(){
        super('NivelGanado')
    }


    
create ()

{   
 
    //  Input Events
    Textos=this.add.text();
   
    
    var logo = this.add.image(400, 380, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      logo.setInteractive()
      logo.on('pointerdown', () => this.scene.start('juego') );
      

      logo.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    Textos.Jugar= this.add.text(360,360, 'Reiniciar', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 

    logo.on('pointerover', function (event) {

        this.clearTint();

    });

    var btnOpciones = this.add.image(400, 450, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
      btnOpciones.setInteractive();
      btnOpciones.on('pointerdown', () => this.scene.start('menu') );
      

      btnOpciones.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    btnOpciones.on('pointerover', function (event) {

        this.clearTint();

    });

    Textos.Creditos= this.add.text(350,430, 'Menu', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 


    var btnSiguienteNivel = this.add.image(400, 550, 'BotonPlay').setScale(1.5,0.3).setTint(0xff0000);
    btnSiguienteNivel.setInteractive();
    btnSiguienteNivel.on('pointerdown', () => this.scene.start('menu') );
      

    btnSiguienteNivel.on('pointerout', function (event) {

        this.setTint(0xff0000);
        
    });

    btnSiguienteNivel.on('pointerover', function (event) {

        this.clearTint();

    });

    Textos.Siguiente= this.add.text(350,530, 'Siguiente', {
        font: "25px Arial",
        fill: "#FFFFFF",
        align: "center",
        stroke: "#de77ae",
        strokeThickness: 10
    }); 
   

    
}

   
}