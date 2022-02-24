var inputFolder = Folder.selectDialog("Selecione a pasta para puxar as fotos:")
var fileList = inputFolder.getFiles("*.jpg")

var outputFolder = Folder.selectDialog("Escolha onde salvar os QQ:")

// janelinha

var janela = new Window('dialog', 'QQ', [200,200,530,350])

janela.edContrato = janela.add('edittext', [140,35,230,60], '', {multiline:false})
janela.stMsg1 = janela.add('statictext', [20,40,200,70], 'Informe o contrato:')
janela.btOk = janela.add('button', [240,35,310,60], 'Montar!', {name:'ok'})

janela.edNumero = janela.add('edittext', [140,85,180,110], '1', {multiline:false})
janela.stMsg2 = janela.add('statictext', [20,90,200,140], 'Número inicial:')

//

janela.center()
janela.show()

var n = janela.edNumero.text
var contrato = janela.edContrato.text
var nome

app.preferences.rulerUnits = Units.CM

jpgSaveOptions = new JPEGSaveOptions()
jpgSaveOptions.embedColorProfile = true
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE
jpgSaveOptions.matte = MatteType.NONE
jpgSaveOptions.quality = 12

for (var i = 0; i < fileList.length; i ++) { // i é o índice pra percorrer a pasta
	if (n<10)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_00" + n + " A" + ".jpg")
	if (n>=10 && n<100)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_0" + n + " A" + ".jpg")
	if (n>=100)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_" + n + " A" + ".jpg")

	open(fileList[i])

	doAction('QQ Montar', 'New Templates')
	activeDocument.duplicate()
	activeDocument.crop([0.1,0,24.1,30], 0, 0, 0)
	activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE)
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)

	if (n<10)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_00" + n + " B" + ".jpg")
	if (n>=10 && n<100)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_0" + n + " B" + ".jpg")
	if (n>=100)
		jpegFile = new File(outputFolder + "/" + contrato + "_QQ_" + n + " B" + ".jpg")

	activeDocument.crop([24,0,48,30], 0, 0, 0)
	activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE)
	app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)

	n ++
}