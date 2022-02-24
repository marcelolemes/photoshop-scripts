
// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/'+ activeDocument.path.displayName); // pasta anterior
escape.create();

jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

jpegFile = new File(escape + '/' + activeDocument.name);

// copia foto e salva na pasta de escape
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
app.preferences.rulerUnits = Units.CM
app.preferences.typeUnits = TypeUnits.PIXELS
if (activeDocument.width > activeDocument.height) { var largura = 30; var altura = 20; var res = 300; }
 else { var largura = 20; var altura = 30; var res = 300; }
activeDocument.resizeImage(largura, altura, res);
activeDocument.selection.selectAll();
activeDocument.selection.copy();
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
