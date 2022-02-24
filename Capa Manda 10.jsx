if (documents.length>0 && documents.length<14) {
	// adquire contrato através do nome da foto original
	var contrato = activeDocument.name.substring(1,5);
	
	// guarda pasta das fotos originais afim de salvar os clips reduzidos no mesmo lugar (pasta do formando)
	var pastaFormando = new Folder(activeDocument.path);
	
	var pontos = documents.length;
	
	// identifica qtde de fotos abertas e executa a ação apropriada
	switch (documents.length) {
        
	     case 1:	doAction('Mandar 1', 'Capa 2');
			break;
		case 2:	doAction('Mandar 2', 'Capa 2');
			break;
		case 3:	doAction('Mandar 3', 'Capa 2');
			break;
		case 4:	doAction('Mandar 4', 'Capa 2');
			break;
		case 5:	doAction('Mandar 5', 'Capa 2');
			break;
		case 6:	doAction('Mandar 6', 'Capa 2');
			break;
		case 7:	doAction('Mandar 7', 'Capa 2');
			break;
		case 8:	doAction('Mandar 8', 'Capa 2');
			break;
		case 9:	doAction('Mandar 9', 'Capa 2');
			break;
		case 10:   doAction('Mandar 10', 'Capa 2');
			break;
		case 11:   doAction('Mandar 11', 'Capa 2');
			break;
		case 12:   doAction('Mandar 12', 'Capa 2');
			break;            
        }
	
	app.preferences.rulerUnits = Units.CM;
	
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
	

}