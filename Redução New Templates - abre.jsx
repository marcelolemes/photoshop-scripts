if (documents.length>1 && documents.length<13) {
	// adquire contrato através do nome da foto original
	var nome = activeDocument.name;
	for (var i=0; nome[i] != '.'; i ++) { }
	var nome = nome.substring(0,i);
	   var album= activeDocument.path.displayName;
   var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();
var contrato = activeDocument.name.substring(1,5);
	// guarda pasta das fotos originais afim de salvar os clips reduzidos no mesmo lugar (pasta do formando)
	var pastaFormando = new Folder(activeDocument.path);
	
	var pontos = documents.length;

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
	relat.writeln("Template: Redução com: "+pontos+" fotos. Iniciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.");
	relat.close();
	// identifica qtde de fotos abertas e executa a ação apropriada
	switch (documents.length) {
        case 1:	doAction('Reduzir 1 fotos', 'Redução New Templates');
			break;
        case 2:	doAction('Reduzir 2 fotos', 'Redução New Templates');
			break;
        case 3:	doAction('Reduzir 3 fotos', 'Redução New Templates');
			break;
		case 4:	doAction('Reduzir 4 fotos', 'Redução New Templates');
			break;
		case 5:	doAction('Reduzir 5 fotos', 'Redução New Templates');
			break;
		case 6:	doAction('Reduzir 6 fotos', 'Redução New Templates');
			break;
		case 7:	doAction('Reduzir 7 fotos', 'Redução New Templates');
			break;
		case 8:	doAction('Reduzir 8 fotos', 'Redução New Templates');
			break;
		case 9:	doAction('Reduzir 9 fotos', 'Redução New Templates');
			break;
		case 10:doAction('Reduzir 10 fotos', 'Redução New Templates');
			break;
		case 11:doAction('Reduzir 11 fotos', 'Redução New Templates');
			break;
		case 12:doAction('Reduzir 12 fotos', 'Redução New Templates');
			break;
	}
	
	preferences.rulerUnits = Units.CM;
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
	
	// salva A e B
   if (pontos>3){	
    jpegFileA = new File(pastaFormando + "/" + nome + "A.jpg");
	activeDocument.duplicate();
	activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    jpegFileB = new File(pastaFormando + "/" + nome + "B.jpg");
	activeDocument.crop([20,0,40,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileB, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES)};
else
      {jpegFileA = new File(pastaFormando + "/" + nome + "A.jpg");
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
    activeDocument.close(SaveOptions.DONOTSAVECHANGES)}};

else {
	alert('Não há fotos suficiente ou há fotos demais para fazer a montagem! Abra de 4 a 12 fotos.', 'Erro!');
}