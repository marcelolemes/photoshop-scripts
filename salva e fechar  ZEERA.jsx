var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 





preferences.rulerUnits = Units.CM;
preferences.typeUnits = TypeUnits.PIXELS
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;



var foto = new Folder("C:/Users/Public");
foto.remove();








var outputFolder = activeDocument.path;
var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }
var nome = nome.substring(0,i);

jpegFile = new File(outputFolder + "/" + nome + ".jpg")
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
	relat.writeln(" Foto "+nome+" salva às: "+  data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds() + ' h ');
	relat.close();

var fotoz = new File("N:/foto.jpg");
open(fotoz);
var fotoz = new Folder("C:/MMMM");
fotoz.remove();


var fotoz = new File("//Servidor/g/fun.jpg");
open(fotoz);

