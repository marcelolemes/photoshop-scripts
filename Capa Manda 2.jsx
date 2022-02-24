app.preferences.rulerUnits = Units.CM;
	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;
// encontra a pasta anterior
jpgSaveOptions.quality = 12;


var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape COM PASTA DO FORMANDO
	var escape = new Folder(pastaOriginal.substring(0,tam) + '/Banner Sagae/'+ activeDocument.path.displayName); // pasta anterior
	escape.create();
var fileName = new String (activeDocument.name);
var i = 0;
for ( ; fileName[i] != '.'; i ++) { }
var nome = fileName.substring(0,i);

for (var contador = 0; documents.length > 0;) { // laço para as fotos abertas
    
                    {
				jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
var outputFolder = activeDocument.path;
var nome = activeDocument.name;
jpegFile = new File(outputFolder + "/" + nome);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);

activeDocument.close(SaveOptions.DONOTSAVECHANGES);
				
			}}
