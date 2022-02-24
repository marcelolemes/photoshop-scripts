var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");
var id = new File("C:/id.txt");
    
id.open('r');
op = id.readln();

var relatFinal = new File(pastaCurso+'/'+" Relatório final.txt");

var contador=0;

for(var i=0; i<listaFormandos.length; i++) {
    var relat = new File(listaFormandos[i].getFiles ("*.txt"));
relat=relat.displayName;
n=relat.length;
relat=relat.substring (2, n-4);
if (relat==op)    
	 contador++;
    }
relatFinal.open('a');
relatFinal.writeln ("Operador "+op+" "+contador+" Albuns ");
 relatFinal.close();

alert("O relatório final de produção foi gerado e salvo dentro dentro do curso.", "Relatório de produção");