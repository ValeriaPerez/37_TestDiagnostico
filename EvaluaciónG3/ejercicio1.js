// INICIO
// CREA VARIABLES jugadosuno y jugadordos
// ESCRIBE LAS REGLAS DE JUEGO
// DECLARA LA VARIABLE i = 0
// INICIA LA CONDICION i < 3
// IMPRIME "PIEDRA PAPEL O TINER?"
// ASIGNALO A jugadoruno
// IMPRIME "PIEDRA PAPEL O TIJERA?"
// ASIGNALO A jugadordos
// IMPRIME ALERT QUE CORRESPONDA
// REPITE HASTA QUE LA CONDICION SE CUMPLA
// IMPREIME FIN DEL JUEGO
// FIN


var jugadoruno = 0;
var jugadordos = 0;
	
alert("Juguemos PIEDRA PAPEL O TIJERA");
alert("No es muy dificil solo debes escribir 'piedra' 'papel' o 'tijera' y nosotros te diremos quien vence a quien...");
alert("Es SUPER IMPORTANTE que escribas BIEN");
alert("Nada de 'papl' ni 'pireda' ni de tus dilexias raras OK?");
alert("CONSTE");
alert("Vamos a jugar pues...");

	for (var i = 0; i < 3; i++){
		jugadoruno = prompt("Piedra, papel o tijera? ");
		jugadordos = prompt("Piedra, papel o tijera? ");

		if (((jugadoruno === "tijera") & (jugadordos === "papel")) || ((jugadordos === "tijera") & (jugadoruno === "papel"))){
			alert("Tijera corta papel TIJERA GANA");
		}
		else if (((jugadoruno === "papel") & (jugadordos === "piedra")) || ((jugadordos === "papel") & (jugadoruno === "piedra"))){
			alert("Papel envuelve a piedra PIEDRA GANA");
		}
		else if (((jugadoruno === "piedra") & (jugadordos === "tijera")) || ((jugadordos === "piedra") & (jugadoruno === "tijera"))){
			alert("Piedra rompe tijera PIEDRA GANA");
		}
		else if ((jugadoruno === "tijera") & (jugadordos === "tijera")){ /*|| ((jugadordos === "tijera") & (jugadoruno === "tijera"))*/
			alert("Tijera vs Tijera EMPATE");
		}
		else if ((jugadoruno === "papel") & (jugadordos === "papel")){ /*|| ((jugadordos === "papel") & (jugadoruno === "papel"))*/
			alert("Papel vs Papel EMPATE");
		}
		else if ((jugadoruno === "piedra") & (jugadordos === "piedra")){ /*|| ((jugadordos === "piedra") & (jugadoruno === "piedra"))*/
			alert("Piedra vs Piedra EMPATE");
		}
		else 
			alert("ESCRIBE BIEN PUES...");
	}
	alert("Fin del juego");