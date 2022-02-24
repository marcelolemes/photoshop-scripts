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

// pega pasta e nome da foto a ser usada para salvar A e B
var outputFolder = activeDocument.path;
var foto = activeDocument.name


// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }


// salva pag A
jpegFile = new File(outputFolder + "/" + foto + "A.jpg");
activeDocument.duplicate();
activeDocument.crop([0.1,0,24.1,30.5], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);

// salva pag B
jpegFile = new File(outputFolder + "/" + foto + "B.jpg");
activeDocument.crop([24,0,48,30.5], 0, 0, 0);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);