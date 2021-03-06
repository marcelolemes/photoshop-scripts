
	preferences.rulerUnits = Units.CM
	preferences.typeUnits = TypeUnits.PIXELS
	jpgSaveOptions = new JPEGSaveOptions();
	jpgSaveOptions.embedColorProfile = true;
	jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	jpgSaveOptions.matte = MatteType.NONE;
	jpgSaveOptions.quality = 12;
	
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();
var contrato = activeDocument.name.substring(1,5);	
    // encontra a pasta anterior
	var pastaOriginal = new String (activeDocument.path);
	var tam = pastaOriginal.length;
	for (var cont; pastaOriginal[tam] != '/'; tam --) { }
	var album= activeDocument.path.displayName;
	// cria pasta de escape
	var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
	escape.create();
	
    	
    	var relat = new File("//Servidor/d/PLANILHAS EXCEL - N?O DELETARRRRRRR/Auto/"+contrato+" "+ album+".txt");
	relat.open('a');
	relat.writeln("Template: Lateral feita. Iniciado em: "+  data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + ' h ');
	relat.close();
	// copia pra ser usada na montagem, salva foto 1 original na pasta de escape e apaga da pasta original
	jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
	if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
	 else { var largura = 20; var res = 300; }
	activeDocument.resizeImage(largura, null, res);
	largura = activeDocument.width;
	var altura = activeDocument.height;
	activeDocument.selection.selectAll();
	activeDocument.selection.copy();
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	open(jpegOriginal);
	jpegFile = new File(escape + '/' + activeDocument.name);
	activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	jpegOriginal.remove();
	
	// verifica se a primeira foto ? V ou H para executar action compat?vel
	if (largura == 30) { doAction('Horizontal', 'Lateral New Templates'); }
	 else { doAction('Vertical', 'Lateral New Templates'); }
	
	// salva foto 2 original na pasta de escape e apaga da pasta original
	jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	    open(jpegOriginal);
	var fileName = new String (activeDocument.name);
	var i = 0;
	for ( ; fileName[i] != '.'; i ++) { }
	var nome = fileName.substring(0,i);	
    open(jpegOriginal);
	jpegFile = new File(escape + '/' + activeDocument.name);
	activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
	jpegFileLA = new File(activeDocument.path + "/" + nome+"la.jpg");
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	jpegOriginal.remove();
	// salva montagem
	activeDocument.saveAs(jpegFileLA, jpgSaveOptions, true, Extension.LOWERCASE);
	activeDocument.close(SaveOptions.DONOTSAVECHANGES);
