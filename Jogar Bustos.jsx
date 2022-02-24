while (documents.length > 0) 
{

preferences.rulerUnits = Units.CM;
preferences.typeUnits = TypeUnits.PIXELS
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

// pega pasta e nome da foto a ser usada para salvar A e B
var outputFolder = activeDocument.path;
var contrato = activeDocument.name.substring(1,5);
var foto = activeDocument.name.substring(5,11);

var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }
var nome = nome.substring(0,i);

var outputFolder = activeDocument.path;

// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }
var album= activeDocument.path.displayName;
// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/Bustos/' + activeDocument.path.displayName);
escape.create();
jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
open(jpegOriginal);
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//jpegOriginal.remove();

/*
var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 
pasta= outputFolder;
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();
*/

}