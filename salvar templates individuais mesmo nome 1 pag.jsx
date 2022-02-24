
// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }
var contrato = activeDocument.name.substring(1,5);
// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
	escape.create();
var folder = activeDocument.path;
var fileName = new String (activeDocument.name);
var i = 0;
for ( ; fileName[i] != '.'; i ++) { }
var nome = fileName.substring(0,i);
var album= activeDocument.path.displayName;
app.preferences.rulerUnits = Units.CM;
	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

    var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

// salva cópia na pasta de escape
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);

activeDocument.close(SaveOptions.DONOTSAVECHANGES);
var pontos = documents.length;

var temp = new String(activeDocument.name);
temp = temp.substring(0,3);
    	var relat = new File("//Servidor/d/PLANILHAS EXCEL - NÃO DELETARRRRRRR/Auto/"+contrato+" "+album+".txt");
	relat.open('a');
	relat.writeln("Template: "+temp+ " feito. Iniciado em: "+ data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear() + ", às "+  data.getHours() + ":" + data.getMinutes() + " h.";
	relat.close();
// salva A e B na pasta
jpegFileA = new File(folder + "/" + nome + " -" + temp + " A.jpg");

activeDocument.saveAs(jpegFileA, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
