var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");

var pastaOriginal = new String (pastaCurso);
var tam1 = pastaOriginal.length;
for (var cont; pastaOriginal[tam1] != '/'; tam1 --) { }
var tam2 = tam1;
pastaOriginal= pastaOriginal.substring(0,tam2);
var nomeContrato = new Folder(pastaOriginal);
nomeContrato= nomeContrato.displayName;
var relatFinal = new File(pastaCurso+'/'+nomeContrato+".txt");

for(var i=0; i<listaFormandos.length; i++) {
    var relat = listaFormandos[i].getFiles ("*.jpg");
    var txt =new File (listaFormandos[i].getFiles ("*.txt"));
var album=listaFormandos[i].displayName;
n=relat.length;
txt=txt.displayName;
var t =txt.length;
txt=txt.substring (2, t-4);
relatFinal.open('a');
relatFinal.writeln ("Album "+album+" "+n+" fotos / Operador "+txt);
 relatFinal.close();
}
alert("O relatório final de produção foi gerado e salvo dentro dentro do curso.", "Relatório de produção");
