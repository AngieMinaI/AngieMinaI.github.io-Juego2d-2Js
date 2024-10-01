var juego= new Phaser.Game(370,550, Phaser.CANVAS, 'AreaJuego');

var teclaArriba;
var teclaAbajo;
var teclaDerecha;
var teclaIzquierda;
var personaje;

var estadoPrincipal={
	preload: function(){
		juego.load.image('fondo', 'img/ciudad.png');
		juego.load.spritesheet('personaje','img/personaje.png',192,192);

	},
	create: function(){
		juego.add.tileSprite(0,0,370,550, 'fondo');
		personaje=juego.add.sprite(25, 430, 'personaje');
		personaje.anchor.setTo(0.5);

		personaje.animations.add('derecha',[0,1,2,3,4,5],7,true);
		personaje.animations.add('izquierda',[6,7,8,9,10,11],7,true);

		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		juego.physics.startSystem(Phaser.Physics.ARCADE);
	},
	update: function(){
		if (teclaDerecha.isDown) {
			personaje.position.x+=2;
			personaje.animations.play('derecha');
		}else if(teclaIzquierda.isDown){
			personaje.position.x-=2;
			personaje.animations.play('izquierda');

		}

	}
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');