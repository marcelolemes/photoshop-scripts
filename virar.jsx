/*
	Gestor de Produção 2 - iniciar correção
	
	Script que abre formando por formando, pega todas as suas imagens, joga em uma lista
      e aplica correção de luz e cor, gravando o atual formando e imagem no arquivo de índice.
	
	@autor: Gustavo Matias
*/

app.preferences.rulerUnits = Units.CM;	
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

if (activeDocument.width > activeDocument.height){
     doAction("virar", "Roberta");
     }