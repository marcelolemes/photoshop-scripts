if (documents.length>2 && documents.length<8) {
	preferences.rulerUnits = Units.CM;
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
   var album= activeDocument.path.displayName;
   var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

 var contrato = activeDocument.name.substring(1,5);
    	
var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 
pasta= outputFolder;
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

var relat = new File(pasta+'/'+"x "+op+".txt");

	relat.open('a');
	relat.writeln("Template: Art Studio Invertido. Iniciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.");
	relat.close();
	// pega pasta e nome da foto a ser usada para salvar A e B
	var outputFolder = activeDocument.path;
	var nome = activeDocument.name;
	for (var i=0; nome[i] != '.'; i ++) { }
	var nome = nome.substring(0,i);
	
	// encontra a pasta anterior
	var pastaOriginal = new String (activeDocument.path);
	var tam = pastaOriginal.length;
	for (var cont; pastaOriginal[tam] != '/'; tam --) { }

	// cria pasta de escape
	var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
	escape.create();
	
	jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);

	// identifica qtde de fotos abertas e executa a ação apropriada
	switch (documents.length) {
		case 3:	doAction('3 fotos', 'Art Studio New Templates Invertido');
			break;
		case 4:	doAction('4 fotos', 'Art Studio New Templates Invertido');
			break;
		case 5:	doAction('5 fotos', 'Art Studio New Templates Invertido');
			break;
		case 6:	doAction('6 fotos', 'Art Studio New Templates Invertido');
			break;
		case 7:	doAction('7 fotos', 'Art Studio New Templates Invertido');
			break;
	}

	// salva pag A e B com nome da primeira foto, adquirido antes de fazer a montagem
	jpegFileA = new File(outputFolder + "/" + nome + "A.jpg");
	activeDocument.duplicate();
	activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	jpegFileB = new File(outputFolder + "/" + nome + "B.jpg");
	activeDocument.crop([20,0,40,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileB, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	
} else {
	alert('Não há fotos suficiente ou há fotos demais para montar Art Studio! Abra de 3 a 7 fotos.', 'Erro!');
}
