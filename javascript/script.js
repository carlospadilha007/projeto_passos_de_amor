
/* Inicio */
var imagens = [];
var slider;

var imgAtual;
var maxImg;

var tmp

var tamanho = 3;
function preCarregamento() {
	var cont = 1;

	for (var i = 0; i < tamanho; i++) {
		imagens[i] = new Image();
		imagens[i].src = "imagens/foto" + cont + ".jpg";
		cont++;
	}
}

function carregarImagem(imagem){
	slider.style.backgroundImage = "url('" + imagens[imagem].src + "')";
}

function inicia(){
	preCarregamento();
	imgAtual = 0;
	maxImg = imagens.length - 1;
	slider = document.getElementById("slider");
	carregarImagem(imgAtual);
	
	
}

function troca(direcao){
	imgAtual += direcao;

	if(imgAtual < 0){
		imgAtual = maxImg;
	}else {
		if(imgAtual > maxImg){
			imgAtual = 0;
		}
	}

	carregarImagem(imgAtual);
}

window.addEventListener("load", inicia);

 /* setTimeout(function() { window.location.reload(1); troca(1)}, 1000); */

		
