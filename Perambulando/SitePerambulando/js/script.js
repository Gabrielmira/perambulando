var danoacumulado = 0
let fullVidaPlayer1 = 50
var vidaPlayer1 = 50


let fullVidaPlayer2 = 50
var vidaPlayer2 = 50

 var aleatorio = 0 


let caranguejoArray = [0,50,0,0,0,0,"images/logo.png"]
let galoArray = [0,60,0,0,0,0,"images/galo.png"]
let tubaraoArray = [0,70,0,0,0,0,"images/tubarao.png"]


let slotPlayer1;
let slotPlayer2;

let estagio = 1;

function ganhou(){
   
    if(estagio == 2){
        estagio = 3;
        document.getElementById("escolherTubarao").disabled = false;
        document.getElementById("telaSeleçãoIMG").src = "images/SELECT3.png";
    }
    if(estagio == 1){
        estagio = 2;
        document.getElementById("escolherGalo").disabled = false;
        document.getElementById("telaSeleçãoIMG").src = "images/SELECT2.png";
    }
  
  
        
        document.getElementById("telaSeleção").style.visibility='visible';
    }

function escolheu(personagem){
    slotPlayer1 = [...personagem];
    fullVidaPlayer1 = personagem[1]
    vidaPlayer1 = personagem[1]
    vidaPlayer1show = document.getElementById('vidaPlayer1show');
    vidaPlayer1show.innerHTML =  vidaPlayer1

    document.getElementById("rolar").disabled = false;
    document.getElementById("atacar").disabled = false;

  
    document.getElementById("player1").src = slotPlayer1[6];
    
    document.getElementById("telaSeleção").style.visibility='hidden';

    if(estagio == 1){
    slotPlayer2 = [...galoArray];
    fullVidaPlayer2 = galoArray[1]
    vidaPlayer2 = galoArray[1]
    vidaPlayer2show = document.getElementById('vidaPlayer2show');
    vidaPlayer2show.innerHTML =  vidaPlayer2
    document.getElementById("player2").src = slotPlayer2[6];
    }
    if(estagio == 2){
    slotPlayer2 = [...tubaraoArray];
    fullVidaPlayer2 = tubaraoArray[1]
    vidaPlayer2 = tubaraoArray[1]
    vidaPlayer2show = document.getElementById('vidaPlayer2show');
    vidaPlayer2show.innerHTML =  vidaPlayer2
    document.getElementById("player2").src = slotPlayer2[6];
    }
    if(estagio == 3){
    slotPlayer2 = [...caranguejoArray];
    fullVidaPlayer2 = caranguejoArray[1]
    vidaPlayer2 = caranguejoArray[1]
    vidaPlayer2show = document.getElementById('vidaPlayer2show');
    vidaPlayer2show.innerHTML =  vidaPlayer2
    document.getElementById("player2").src = slotPlayer2[6];
    }


    atualizarBarraVida(vidaPlayer2,fullVidaPlayer2,"Player2");
    atualizarBarraVida(vidaPlayer1,fullVidaPlayer1,"Player1");
}

function atualizarBarraVida(vida,fullvida,idplayer) {

    var porcentagem = (vida / fullvida) * 100;


            var vidaBarra = document.getElementById("vidaBarra"+idplayer);


            if (porcentagem > 50) {
                vidaBarra.style.backgroundColor = "green";
            } else if (porcentagem > 25) {
                vidaBarra.style.backgroundColor = "yellow";
            } else {
                vidaBarra.style.backgroundColor = "red";
            }

           
            vidaBarra.style.width = porcentagem*2+"px";
        }


 
 
 function rolar() {
    aleatorio = Math.floor( 1 + 6*Math.random() );
    numeroaleatorio = document.getElementById('numeroaleatorio');
    numeroaleatorio.innerHTML =  aleatorio
	danoacumulado = danoacumulado + aleatorio
	danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoacumulado
	
	if (aleatorio == 1){

        

	danoacumulado = 0
	danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoacumulado
    document.getElementById("rolar").disabled = true;
    document.getElementById("atacar").disabled = true;


//-------------------------------------------

document.getElementById("missplayer1").style.visibility='visible';

    setTimeout(function() {
    document.getElementById("missplayer1").style.visibility='hidden';
    
    if (vidaPlayer2 > 0){
       return ataqueinimigo ();
    }
     }, 1000)

   //-------------------------------------------

 
   

	}
  }

function atacar(){
vidaPlayer2 = vidaPlayer2 - danoacumulado
vidaPlayer2show = document.getElementById('vidaPlayer2show');
    vidaPlayer2show.innerHTML =  vidaPlayer2
    atualizarBarraVida(vidaPlayer2,fullVidaPlayer2,"Player2");
    
//vidaBarraPlayer2
	
	danoacumulado = 0
	danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoacumulado


    document.getElementById("rolar").disabled = true;
    document.getElementById("atacar").disabled = true;



//----------------------------------------------------------------
     document.getElementById('player1').className = 'aninPL1atkPL2'; //animação
  setTimeout(function() {
   
     document.getElementById('player1').className = 'none';
    if (vidaPlayer2 > 0){
       return ataqueinimigo ();
    }
    }, 900)
//----------------------------------------------------------------

    
	
    if (vidaPlayer2 < 1){
        document.getElementById("youwin").style.visibility='visible';
        setTimeout(function() {
            document.getElementById("youwin").style.visibility='hidden';
            ganhou();
            

   
  }, 900)
    }
	


}


var dadoenemy = 0;
var danoenemy = 0;






function ataqueinimigo (){
    



    for (;;) {
    if (danoenemy < 11) {

        dadoenemy = Math.floor(1 + 6*Math.random() );

    if (dadoenemy == 1){
		danoenemy = 0
    danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoenemy

    numeroaleatorio = document.getElementById('numeroaleatorio');
    numeroaleatorio.innerHTML =  dadoenemy


   //----------------------------------------------
    document.getElementById("missplayer2").style.visibility='visible';
   //----------------------------------------------


    setTimeout(function() {
        document.getElementById("rolar").disabled = false;
        document.getElementById("atacar").disabled = false;
         //----------------------------------------------
        document.getElementById("missplayer2").style.visibility='hidden';
         //----------------------------------------------
}, 800)
break; 
    } 

    danoenemy = danoenemy + dadoenemy;
        
    numeroaleatorio = document.getElementById('numeroaleatorio');
    numeroaleatorio.innerHTML =  dadoenemy
    danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoenemy
    return rolarinimigo();
    }
  
    else {

    vidaPlayer1 = vidaPlayer1 - danoenemy
	vidaPlayer1show = document.getElementById('vidaPlayer1show');
    vidaPlayer1show.innerHTML =  vidaPlayer1

    atualizarBarraVida(vidaPlayer1,fullVidaPlayer1,"Player1");

    numeroaleatorio = document.getElementById('numeroaleatorio');
    numeroaleatorio.innerHTML =  dadoenemy
    danoacumuladoshow = document.getElementById('danoacumuladoshow');
    danoacumuladoshow.innerHTML =  danoenemy

    danoenemy = 0


//----------------------------------------------------------------
  document.getElementById('player2').className = 'aninPL2atkPL1'; //animação
  setTimeout(function() {
    
    document.getElementById('player2').className = 'none';


    if(vidaPlayer1 < 1){
        document.getElementById("youlose").style.visibility='visible';
        setTimeout(function() {
            document.getElementById("youlose").style.visibility='hidden';
            document.getElementById("telaSeleção").style.visibility='visible';
            

   
  }, 900)
        
    }

    }, 800)
//----------------------------------------------------------------

    
if(vidaPlayer1 > 0){
        
        document.getElementById("rolar").disabled = false;
        document.getElementById("atacar").disabled = false;
        
    }

	break; 
    }
     }

    
}



function rolarinimigo(){
    setTimeout(function() {
    ataqueinimigo ();
}, 600)

}
