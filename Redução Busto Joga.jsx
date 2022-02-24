
if (documents.length>3 && documents.length<7) {

	// adquire contrato através do nome da foto original
	var contrato = activeDocument.name.substring(1,5);

	// adquire número da primeira foto para usar de nome da montagem
	var nomeFoto = activeDocument.name.substring(7,10);

	// guarda pasta das fotos originais afim de salvar os clips reduzidos no mesmo lugar (pasta do formando)
	var pastaFormando = new Folder(activeDocument.path);
var contrato = activeDocument.name.substring(1,5);
	var album= activeDocument.path.displayName;
	// identifica qtde de fotos abertas e executa a ação apropriada
	switch (documents.length) {
			case 4:	doAction('4 fotos', 'Redução Busto');
			break;
		case 5:	doAction('5 fotos', 'Redução Busto');
			break;
		case 6:	doAction('6 fotos', 'Redução Busto');
				break;
	}

    	
	app.preferences.rulerUnits = Units.CM;

	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
    
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 
pasta= pastaFormando;
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

var relat = new File(pasta+'/'+"x "+op+".txt");

	relat.open('a');
	relat.writeln("Template: Art Studio. Iniciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.");
	relat.close();
	// salva A e B
	jpegFileA = new File(pastaFormando + "/" + contrato + "_AS_" + nomeFoto + " A.jpg");
	jpegFileB = new File(pastaFormando + "/" + contrato + "_AS_" + nomeFoto + " B.jpg");

	activeDocument.duplicate();
	activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	
	activeDocument.crop([20,0,40,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileB, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
} else {
	alert('Não há fotos suficiente ou há fotos demais para montar Art Studio! Abra de 4 a 6 fotos.', 'Erro!');
}
