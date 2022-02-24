var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");


var relatFinal = new File("//SERVIDOR/d/Relatórios" +"/"+ pastaCurso.displayName +" Relatório final.txt");
relatFinal.open('w');
relatFinal.writeln("\n\nRelatório de produção\n\n\n");

for(var i=0; i<listaFormandos.length; i++) {
    relatFinal.writeln("" + listaFormandos[i].displayName);
	var relat = new File(listaFormandos[i].getFiles ("*.txt"));
	relat.open('r');
	relatFinal.writeln("" + relat.read());
	relat.close();
}
relatFinal.close();

// apaga os relatórios individuais dentro de cada formando
for(var i=0; i<listaFormandos.length; i++) {
	var relat = new File(listaFormandos[i].getFiles ("Relatório.txt"));

}

alert("O relatório final de produção foi gerado e salvo na pasta de Relátórios.", "Relatório de produção");