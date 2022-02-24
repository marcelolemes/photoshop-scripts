
// identifica valores

var nome = activeDocument.name;
var outputFolder = activeDocument.path;

var contrato = activeDocument.name.substring(1,5);
var pasta = activeDocument.path;

var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

//
var temp = activeDocument.path.displayName;


app.preferences.rulerUnits = Units.CM;	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

var data = new Date();
var tempoInicial = data.getTime();
var tempo = data.getTime();

if (documents.length > 0) 
	var lista = pasta.getFiles("*");
    var quan = lista.length;
    quan2 = (quan-1);

var op=('Marcelo');
jpegFile = new File(outputFolder + "/" + nome);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);

activeDocument.close(SaveOptions.DONOTSAVECHANGES);
				// reconhece o template que está sendo usado

if (temp=='02' || temp=='07' || temp=='1-' || temp=='2-' || temp=='3-') {
	// salva A e B
	activeDocument.duplicate();

}
 else {
	// salva
	jpegFile = new File (pasta + "/" +"X"+ temp + "_" +op+".jpg");
	activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE,SaveOptions);
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);
 }

	var relat = new File("//Servidor/d/PLANILHAS EXCEL - NÃO DELETARRRRRRR/Auto/"+contrato+" "+temp+".txt");
	relat.open('a');
	relat.writeln("Contrato " + contrato + ", Operador " + op+ " tinha " + quan2 +" fotos. Iniciado em: "+  data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + ' h ');
	relat.close();
	