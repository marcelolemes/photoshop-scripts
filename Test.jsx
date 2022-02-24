/*
Programa que pega as fotos abertas, pede a pasta de um curso,
verifica todas as pastas de formandos ali existentes, procurando
por fotos de mesmo nome que a foto aberta, para então substituir
pela versão aberta.
*/

jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

var mensagem = "";

if (documents.length > 0) {
	var pastaCurso = Folder.selectDialog("Escolha a pasta do curso:");
	var lista = pastaCurso.getFiles("20*");
	for (var contador = 0; documents.length > 0; activeDocument.close(SaveOptions.DONOTSAVECHANGES)) { // laço para as fotos abertas
		for (var k = lista.length; k > 0; ) { // laço para as pastas dos formandos
			k --;
			var foto = lista[k].getFiles(activeDocument.name);
			if (foto.length > 0) {
				jpegFile = new File(lista[k] + "/" + activeDocument.name);
				activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
				contador ++;
			}
			// verificador de subpastas
			var lista1 = lista[k].getFiles ("*"); // lista mestre
			var lista2 = lista[k].getFiles ("*.j*");
			var lista3 = lista[k].getFiles ("*.d*");
			var lista4 = lista[k].getFiles ("*.i*");
              var lista5 = lista[k].getFiles ("*.B*");
              var lista6 = lista[k].getFiles ("*.t*");
			for(var i=0; i<lista2.length; i++) { // eliminador de j*
				for(var z=0; z<lista1.length; z++) {
					if(lista1[z].displayName==lista2[i].displayName) {
						lista1.splice (z, 1, );
					}
				}
			}
			for(var i=0; i<lista3.length; i++) { // eliminador de d*
				for(var z=0; z<lista1.length; z++) {
					if(lista1[z].displayName==lista3[i].displayName) {
						lista1.splice (z, 1, );
					}
				}
			}
			for(var i=0; i<lista4.length; i++) { // eliminador de i*
				for(var z=0; z<lista1.length; z++) {
					if(lista1[z].displayName==lista4[i].displayName) {
						lista1.splice (z, 1, );
					}
				}
			}
              for(var i=0; i<lista5.length; i++) { // eliminador de B*
				for(var z=0; z<lista1.length; z++) {
					if(lista1[z].displayName==lista5[i].displayName) {
						lista1.splice (z, 1, );
					}
				}
			}
              for(var i=0; i<lista6.length; i++) { // eliminador de t*
				for(var z=0; z<lista1.length; z++) {
					if(lista1[z].displayName==lista6[i].displayName) {
						lista1.splice (z, 1, );

					}
				}
			}
			for(var i=0; i<lista1.length; i++) { // explora os itens restantes (provavelmente só pastas)
				var subPasta = Folder("" + lista[k] + "/" + lista1[i].displayName);
				var foto = subPasta.getFiles(activeDocument.name);
				if (foto.length > 0) {
					jpegFile = new File(subPasta + "/" + activeDocument.name);
					activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
					contador ++;
				}
			}
		}
		mensagem += "Foto " + activeDocument.name + " substituida em " + contador + " álbuns.\n\n"
		contador = 0;
	}
	alert("" + mensagem, "Substituíção completa");
} else {
	alert("Não há fotos abertas! \nPara a opção substituir, você deve abrir no mínimo uma foto na qual será substituida em todos os albúns.", "Falha ao substituir");
}