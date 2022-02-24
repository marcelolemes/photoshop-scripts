preferences.rulerUnits = Units.CM;
preferences.typeUnits = TypeUnits.PIXELS
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

// pega pasta e nome da foto a ser usada para salvar A e B
var outputFolder = activeDocument.path;
var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }
var nome = nome.substring(0,i);

// encontra a pasta anterior
var pastaOriginal = new String (activeDocument.path);
var tam = pastaOriginal.length;
for (var cont; pastaOriginal[tam] != '/'; tam --) { }

// cria pasta de escape
var escape = new Folder(pastaOriginal.substring(0,tam) + '/REDUZIDAS/' + activeDocument.path.displayName);
escape.create();

// salva foto original na pasta de escape e apaga da pasta original
jpegOriginal = new File(activeDocument.path + '/' + activeDocument.name);
if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
 else { var largura = 20; var res = 300; }
activeDocument.resizeImage(largura, null, res);
largura = activeDocument.width;
var altura = activeDocument.height;
activeDocument.selection.selectAll();
activeDocument.selection.copy();
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
open(jpegOriginal);
jpegFile = new File(escape + '/' + activeDocument.name);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
jpegOriginal.remove();

// reconhece vertical ou horizontal e deleta borda e máscara desnescessária correspondente ao número da foto
if (activeDocument.name == "REDU02.psd") {
	var fotoAtual = 2 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
            }
        }
		if (activeDocument.name == "REDU03.psd") {
	var fotoAtual = 3 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
            }
        }
		if (activeDocument.name == "REDU04.psd") {
	var fotoAtual = 4 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU05.psd") {
	var fotoAtual = 5 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU06.psd") {
	var fotoAtual = 6 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU07.psd") {
	var fotoAtual = 7 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU08.psd") {
	var fotoAtual = 8 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
		case 8:	if (largura > altura) {
				activeDocument.layers.getByName("08 V").remove();
				activeDocument.layers.getByName("borda 08 V").remove();
			}
			 else {
				activeDocument.layers.getByName("08 H").remove();
				activeDocument.layers.getByName("borda 08 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU09.psd") {
	var fotoAtual = 9 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
		case 8:	if (largura > altura) {
				activeDocument.layers.getByName("08 V").remove();
				activeDocument.layers.getByName("borda 08 V").remove();
			}
			 else {
				activeDocument.layers.getByName("08 H").remove();
				activeDocument.layers.getByName("borda 08 H").remove();
			 }
			break;
		case 9:	if (largura > altura) {
				activeDocument.layers.getByName("09 V").remove();
				activeDocument.layers.getByName("borda 09 V").remove();
			}
			 else {
				activeDocument.layers.getByName("09 H").remove();
				activeDocument.layers.getByName("borda 09 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU10.psd") {
	var fotoAtual = 10 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
		case 8:	if (largura > altura) {
				activeDocument.layers.getByName("08 V").remove();
				activeDocument.layers.getByName("borda 08 V").remove();
			}
			 else {
				activeDocument.layers.getByName("08 H").remove();
				activeDocument.layers.getByName("borda 08 H").remove();
			 }
			break;
		case 9:	if (largura > altura) {
				activeDocument.layers.getByName("09 V").remove();
				activeDocument.layers.getByName("borda 09 V").remove();
			}
			 else {
				activeDocument.layers.getByName("09 H").remove();
				activeDocument.layers.getByName("borda 09 H").remove();
			 }
			break;
		case 10:	if (largura > altura) {
				activeDocument.layers.getByName("10 V").remove();
				activeDocument.layers.getByName("borda 10 V").remove();
			}
			 else {
				activeDocument.layers.getByName("10 H").remove();
				activeDocument.layers.getByName("borda 10 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU11.psd") {
	var fotoAtual = 11 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
		case 8:	if (largura > altura) {
				activeDocument.layers.getByName("08 V").remove();
				activeDocument.layers.getByName("borda 08 V").remove();
			}
			 else {
				activeDocument.layers.getByName("08 H").remove();
				activeDocument.layers.getByName("borda 08 H").remove();
			 }
			break;
		case 9:	if (largura > altura) {
				activeDocument.layers.getByName("09 V").remove();
				activeDocument.layers.getByName("borda 09 V").remove();
			}
			 else {
				activeDocument.layers.getByName("09 H").remove();
				activeDocument.layers.getByName("borda 09 H").remove();
			 }
			break;
		case 10:	if (largura > altura) {
				activeDocument.layers.getByName("10 V").remove();
				activeDocument.layers.getByName("borda 10 V").remove();
			}
			 else {
				activeDocument.layers.getByName("10 H").remove();
				activeDocument.layers.getByName("borda 10 H").remove();
			 }
			break;
		case 11:	if (largura > altura) {
				activeDocument.layers.getByName("11 V").remove();
				activeDocument.layers.getByName("borda 11 V").remove();
			}
			 else {
				activeDocument.layers.getByName("11 H").remove();
				activeDocument.layers.getByName("borda 11 H").remove();
			 }
			break;
	}
}
if (activeDocument.name == "REDU12.psd") {
	var fotoAtual = 12 - (documents.length - 1);
	switch (fotoAtual) {
		case 1:	if (largura > altura) {
				activeDocument.layers.getByName("01 V").remove();
				activeDocument.layers.getByName("borda 01 V").remove();
			}
			 else {
				activeDocument.layers.getByName("01 H").remove();
				activeDocument.layers.getByName("borda 01 H").remove();
			 }
			break;
		case 2:	if (largura > altura) {
				activeDocument.layers.getByName("02 V").remove();
				activeDocument.layers.getByName("borda 02 V").remove();
			}
			 else {
				activeDocument.layers.getByName("02 H").remove();
				activeDocument.layers.getByName("borda 02 H").remove();
			 }
			break;
		case 3:	if (largura > altura) {
				activeDocument.layers.getByName("03 V").remove();
				activeDocument.layers.getByName("borda 03 V").remove();
			}
			 else {
				activeDocument.layers.getByName("03 H").remove();
				activeDocument.layers.getByName("borda 03 H").remove();
			 }
			break;
		case 4:	if (largura > altura) {
				activeDocument.layers.getByName("04 V").remove();
				activeDocument.layers.getByName("borda 04 V").remove();
			}
			 else {
				activeDocument.layers.getByName("04 H").remove();
				activeDocument.layers.getByName("borda 04 H").remove();
			 }
			break;
		case 5:	if (largura > altura) {
				activeDocument.layers.getByName("05 V").remove();
				activeDocument.layers.getByName("borda 05 V").remove();
			}
			 else {
				activeDocument.layers.getByName("05 H").remove();
				activeDocument.layers.getByName("borda 05 H").remove();
			 }
			break;
		case 6:	if (largura > altura) {
				activeDocument.layers.getByName("06 V").remove();
				activeDocument.layers.getByName("borda 06 V").remove();
			}
			 else {
				activeDocument.layers.getByName("06 H").remove();
				activeDocument.layers.getByName("borda 06 H").remove();
			 }
			break;
		case 7:	if (largura > altura) {
				activeDocument.layers.getByName("07 V").remove();
				activeDocument.layers.getByName("borda 07 V").remove();
			}
			 else {
				activeDocument.layers.getByName("07 H").remove();
				activeDocument.layers.getByName("borda 07 H").remove();
			 }
			break;
		case 8:	if (largura > altura) {
				activeDocument.layers.getByName("08 V").remove();
				activeDocument.layers.getByName("borda 08 V").remove();
			}
			 else {
				activeDocument.layers.getByName("08 H").remove();
				activeDocument.layers.getByName("borda 08 H").remove();
			 }
			break;
		case 9:	if (largura > altura) {
				activeDocument.layers.getByName("09 V").remove();
				activeDocument.layers.getByName("borda 09 V").remove();
			}
			 else {
				activeDocument.layers.getByName("09 H").remove();
				activeDocument.layers.getByName("borda 09 H").remove();
			 }
			break;
		case 10:	if (largura > altura) {
				activeDocument.layers.getByName("10 V").remove();
				activeDocument.layers.getByName("borda 10 V").remove();
			}
			 else {
				activeDocument.layers.getByName("10 H").remove();
				activeDocument.layers.getByName("borda 10 H").remove();
			 }
			break;
		case 11:	if (largura > altura) {
				activeDocument.layers.getByName("11 V").remove();
				activeDocument.layers.getByName("borda 11 V").remove();
			}
			 else {
				activeDocument.layers.getByName("11 H").remove();
				activeDocument.layers.getByName("borda 11 H").remove();
			 }
			break;
		case 12:	if (largura > altura) {
				activeDocument.layers.getByName("12 V").remove();
				activeDocument.layers.getByName("borda 12 V").remove();
			}
			 else {
				activeDocument.layers.getByName("12 H").remove();
				activeDocument.layers.getByName("borda 12 H").remove();
			 }
			break;
	}
}