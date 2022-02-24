
// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/Aberturas para capa de Album'); // pasta anterior
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