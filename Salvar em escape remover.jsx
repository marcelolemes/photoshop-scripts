
// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape COM PASTA DO FORMANDO
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
	escape.create();

var folder = activeDocument.path;
var fileName = new String (activeDocument.name);
var i = 0;
for ( ; fileName[i] != '.'; i ++) { }
var nome = fileName.substring(0,i);

app.preferences.rulerUnits = Units.CM;
	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

// salva cópia na pasta de escape
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);