var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");
var relatFinal = new File(pastaCurso+'/'+" Relatório final.txt");

for(var i=0; i<listaFormandos.length; i++) {
    var relat = listaFormandos[i].getFiles ("*.jpg");
var album=listaFormandos[i].displayName;
n=relat.length;
relatFinal.open('a');
relatFinal.writeln ("Album "+album+" "+n+" fotos ");
 relatFinal.close();
}
alert("O relatório final de produção foi gerado e salvo dentro dentro do curso.", "Relatório de produção");