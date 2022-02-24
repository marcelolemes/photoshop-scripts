// Este script iniciar a montagem da Redu��o MegaPixel 48x30, mas as a��es utilizam como script intermedi�rio o mesmo usado na 40x30

if (documents.length>3 && documents.length<13) {
	// Adquire o nome original da primeira foto, para o m�todo de nomenclatura que n�o perde a sequencia do �lbum
	var nomePrimeira = new String (activeDocument.name);
	var i = 0;
	for ( ; nomePrimeira[i] != '.'; i ++) { }
	var nomePrimeira = nomePrimeira.substring(0,i);
	
	// adquire contrato atrav�s do nome da foto original
	var contrato = activeDocument.name.substring(1,5);
	
	// guarda pasta das fotos originais afim de salvar os clips reduzidos no mesmo lugar (pasta do formando)
	var pastaFormando = new Folder(activeDocument.path);
	
	var pontos = documents.length;
	
	// identifica qtde de fotos abertas e executa a a��o apropriada
	switch (documents.length) {
		case 4:	doAction('Reduzir 4 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 5:	doAction('Reduzir 5 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 6:	doAction('Reduzir 6 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 7:	doAction('Reduzir 7 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 8:	doAction('Reduzir 8 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 9:	doAction('Reduzir 9 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 10:doAction('Reduzir 10 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 11:doAction('Reduzir 11 fotos', 'Redu��o MegaPixel 48x30');
			break;
		case 12:doAction('Reduzir 12 fotos', 'Redu��o MegaPixel 48x30');
			break;
	}
	
	app.preferences.rulerUnits = Units.CM;
	
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
	
	/* Nomenclatura antiga, como na Sagae
	// Nome da montagem com n�mero contrato _ MONT + sequencia autom�tica, como na Sagae
	var mont = (pastaFormando.getFiles("*_MONT*").length / 2) + 1;
	while (pastaFormando.getFiles("*_MONT" + mont + "*").length > 0) {
		mont ++;
	}
	// salva A e B
	jpegFileA = new File(pastaFormando + "/" + contrato + "_MONT" + mont + " A.jpg");
	jpegFileB = new File(pastaFormando + "/" + contrato + "_MONT" + mont + " B.jpg");
	*/
	
	// Nomenclatura nova
	// Nome da montagem com nome original da primeira foto _ R + sequencia autom�tica, n�o perdendo a sequencia do �lbum
	var mont = (pastaFormando.getFiles("*_R*").length / 2) + 1;
	while (pastaFormando.getFiles("*_R" + mont + "*").length > 0) {
		mont ++;
	}
	// salva A e B
	jpegFileA = new File(pastaFormando + "/" + nomePrimeira + "_R" + mont + " A.jpg");
	jpegFileB = new File(pastaFormando + "/" + nomePrimeira + "_R" + mont + " B.jpg");

	activeDocument.duplicate();
	activeDocument.crop([0.1,0,24.1,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	
	activeDocument.crop([24,0,48,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileB, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
} else {
	alert('N�o h� fotos suficiente ou h� fotos demais para fazer a montagem! Abra de 4 a 12 fotos.', 'Erro');
}