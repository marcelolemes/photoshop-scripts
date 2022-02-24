var pastaCurso = Folder.selectDialog("Escolha a pasta do curso:");
var listaFormandos = pastaCurso.getFiles("*");
var listaImagens;
var formando;

alert("Digite a qualidade desejada de 1 a 12");

var janela = new Window('dialog', 'Você Quis Dizer ???', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], 12, {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'Template:');
janela.btOk = janela.add('button', [240,35,310,60], 'Confirrmar', {name:'ok'});
janela.edit.active = true;

//

janela.center();
janela.show();

var qualidade = janela.edit.text;


if (qualidade>0 && qualidade<12)
{


// Inicia varredura nos formandos com loop maior:
for (var i=0; i<listaFormandos.length; i++) {
	// Pega formando:
	formando = new Folder(listaFormandos[i]);
	
	// Concatena na lista as imagens desse formando:
	if(i==0) {
		listaImagens = formando.getFiles("*.jpg");
	} else {
		listaImagens = listaImagens.concat (formando.getFiles("*.jpg"));
	  }
	
	// Loop intermediário em formando que busca por subpastas extras:
	var lista1 = formando.getFiles ("*"); // lista mestre
	var lista2 = formando.getFiles ("*.j*");
	var lista3 = formando.getFiles ("*.d*");
	var lista4 = formando.getFiles ("*.i*");
    var lista5 = formando.getFiles (".*");
	for(var ii=0; ii<lista2.length; ii++) { // eliminador de j*
		for(var z=0; z<lista1.length; z++) {
			if(lista1[z].displayName==lista2[ii].displayName) {
				lista1.splice (z, 1, );
			}
		}
	}
	for(var ii=0; ii<lista3.length; ii++) { // eliminador de d*
		for(var z=0; z<lista1.length; z++) {
			if(lista1[z].displayName==lista3[ii].displayName) {
				lista1.splice (z, 1, );
			}
		}
	}
	for(var ii=0; ii<lista4.length; ii++) { // eliminador de i*
		for(var z=0; z<lista1.length; z++) {
			if(lista1[z].displayName==lista4[ii].displayName) {
				lista1.splice (z, 1, );
			}
		}
	}
    for(var ii=0; ii<lista5.length; ii++) { // eliminador de .*
		for(var z=0; z<lista1.length; z++) {
			if(lista1[z].displayName==lista5[ii].displayName) {
				lista1.splice (z, 1, );
			}
		}
	}
	for(var ii=0; ii<lista1.length; ii++) { // explora os itens restantes (provavelmente só pastas)
		var subPasta = Folder("" + formando.fullName + "/" + lista1[ii].displayName);
        //alert(subPasta.displayName);
		listaImagens = listaImagens.concat (subPasta.getFiles("*.jpg"));
	}
}

// Reorganiza a lista:
for(var a=0; a<listaImagens.length; a++) {
	for(var b=a+1; b<listaImagens.length; b++) {
		if(listaImagens[a].displayName>listaImagens[b].displayName) {
			var auxLista = listaImagens[a];
			listaImagens[a] = listaImagens[b];
			listaImagens[b] = auxLista;
		}
	}
}

app.preferences.rulerUnits = Units.CM;	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = qualidade;

// Alerta inicial
alert("Total de imagem na lista: " + listaImagens.length);
var nomeAnterior = "";

// Abre um por um e faz a correção desejada:
for(var i=0; i<listaImagens.length; i++) {
	open(listaImagens[i]);
	// cria o arquivo Indice para guardar a posição atual
	var indice = new File("/Gestor de Produção/Indice.txt");
	indice.open('w');
	indice.writeln("" + i + "#" + pastaCurso.fullName);
	indice.close();

		nomeAnterior = activeDocument.name;
		activeDocument.close(SaveOptions.SAVECHANGES);

}


}