preferences.rulerUnits = Units.CM;
preferences.typeUnits = TypeUnits.PIXELS
jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;
var nome = activeDocument.name;
var outputFolder = activeDocument.path;
jpegFile = new File(outputFolder + "/" + nome);
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
if (documents.length>0 && documents.length<13) {
doAction('12 fotos', 'Capa');}
if (documents.length>12 && documents.length<17) {
doAction('16 fotos', 'Capa');}
if (documents.length>16 && documents.length<21) {
doAction('20 fotos', 'Capa');}
if (documents.length>20 && documents.length<25) {
doAction('24 fotos', 'Capa');}
