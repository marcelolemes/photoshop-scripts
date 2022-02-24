/*
	Script que usa "foto anterior" para pegar o nome a ser dado para a montagem de pag dupla,
	salva a cópia original na pasta de escape e salva a montagem da seguinte forma:
	-   A = nomefoto;
	-   B = nomefotoB.
*/

preferences.rulerUnits = Units.CM;
preferences.typeUnits = TypeUnits.PIXELS
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;
var pasta = activeDocument.path;
var lista = pasta.getFiles("*");
    var quan = lista.length;
    quan2 = (quan-1);


var album= activeDocument.path.displayName;
// pega pasta e nome da foto a ser usada para salvar A e B
var outputFolder = activeDocument.path;
var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }
var nome = nome.substring(0,i);
var contrato = activeDocument.name.substring(1,5);

// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }
 
var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 
pasta= outputFolder;
    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

var relat = new File(pasta+'/'+"x "+op+".txt");

relat.open('a');
relat.writeln("Operador:" +op+" "+album+" "+ " tinha " + quan2 +" fotos. Template AB niciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.");

relat.close(); 


	var pasta = activeDocument.path.displayName;
// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
escape.create();

// salva foto original na pasta de escape
jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
open(jpegOriginal);
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// salva pag A
jpegFile = new File(outputFolder + "/" +"+"+pasta+" "+nome + "A.jpg");
activeDocument.duplicate();
activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// salva pag B
jpegFile = new File(outputFolder + "/" +"+"+pasta+" "+nome + "B.jpg");
activeDocument.crop([20,0,40,30], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);