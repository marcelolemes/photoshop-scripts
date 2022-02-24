if (documents.length>3 && documents.length<13) {
	// adquire contrato através do nome da foto original
	var contrato = activeDocument.name.substring(1,5);
	
	// guarda pasta das fotos originais afim de salvar os clips reduzidos no mesmo lugar (pasta do formando)
	var pastaFormando = new Folder(activeDocument.path);
	
	var pontos = documents.length;
	
	// identifica qtde de fotos abertas e executa a ação apropriada
	switch (documents.length) {
		case 4:	doAction('Reduzir 4 fotos', 'Redução 2010');
			break;
		case 5:	doAction('Reduzir 5 fotos', 'Redução 2010');
			break;
		case 6:	doAction('Reduzir 6 fotos', 'Redução 2010');
			break;
		case 7:	doAction('Reduzir 7 fotos', 'Redução 2010');
			break;
		case 8:	doAction('Reduzir 8 fotos', 'Redução 2010');
			break;
		case 9:	doAction('Reduzir 9 fotos', 'Redução 2010');
			break;
		case 10:doAction('Reduzir 10 fotos', 'Redução 2010');
			break;
		case 11:doAction('Reduzir 11 fotos', 'Redução 2010');
			break;
		case 12:doAction('Reduzir 12 fotos', 'Redução 2010');
			break;
	}
	
	app.preferences.rulerUnits = Units.CM;
	
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
	
	var mont = (pastaFormando.getFiles("*_MONT*").length / 2) + 1;
	while (pastaFormando.getFiles("*_MONT" + mont + "*").length > 0) {
		mont ++;
	}
	
	// salva A e B
	jpegFileA = new File(pastaFormando + "/" + contrato + "_MONT" + mont + " A.jpg");
	jpegFileB = new File(pastaFormando + "/" + contrato + "_MONT" + mont + " B.jpg");

	activeDocument.duplicate();
	activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	
	activeDocument.crop([20,0,40,30], 0, 0, 0);
	activeDocument.saveAs(jpegFileB, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);

	var relat = new File("C:/Relatório Redução.txt");
	relat.open('a');
	relat.writeln("Contrato " + contrato + ", redução: " + pontos + ".");
	relat.close();
	
	var total = new File("C:/Total.txt");
	total.open('r');
	var qtde = parseInt(total.readln()) + pontos;
	total.close();
	total.open('w');
	total.writeln(qtde);
	total.close();
} else {
	alert('Não há fotos suficiente ou há fotos demais para fazer a montagem! Abra de 4 a 12 fotos.', 'Erro!');
}