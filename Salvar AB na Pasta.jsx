/*
	Script que usa "foto anterior" para pegar o nome a ser dado para a montagem de pag dupla,
	salva a cópia original na pasta de escape, apaga original e salva a montagem da seguinte forma:
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
var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();
var contrato = activeDocument.name.substring(0,6);
// pega pasta e nome da foto a ser usada para salvar A e B
var outputFolder = activeDocument.path;
var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }
var nome1 = nome.substring(6,i);
nome = contrato+'_'+nome1;
var album= activeDocument.path.displayName;
// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
escape.create();

// salva foto original na pasta de escape e apaga da pasta original
jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
open(jpegOriginal);
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
jpegOriginal.remove();
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
 var temp= activeDocument.name;
for (var i=0; temp[i] != '.'; i ++) { }
var temp = temp.substring(0,i);
// salva pag A
jpegFile = new File(outputFolder + "/" + nome + "A.jpg");
activeDocument.duplicate();
activeDocument.crop([0.1,0,20.1,30], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// salva pag B
jpegFile = new File(outputFolder + "/" + nome + "B.jpg");
activeDocument.crop([20,0,40,30], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    	

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
	relat.writeln("Template: "+temp+ " feito. Iniciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.");
	relat.close();