var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");
/*
alert("DIGITE O CONTRATO");

var janela = new Window('dialog', 'CONTRATO', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], "", {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'CONTRATO:');
janela.btOk = janela.add('button', [240,35,310,60], 'CONTRATO', {name:'ok'});
janela.edit.active = true;

//

janela.center();
janela.show();

var contrato = janela.edit.text;

alert("DIGITE O CURSO");

var janela = new Window('dialog', 'CURSO', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], "", {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'CURSO:');
janela.btOk = janela.add('button', [240,35,310,60], 'CURSO', {name:'ok'});
janela.edit.active = true;

//

janela.center();
janela.show();

var curso = janela.edit.text;

alert("DIGITE A CIDADE");

var janela = new Window('dialog', 'CIDADE', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], "", {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'CIDADE:');
janela.btOk = janela.add('button', [240,35,310,60], 'CIDADE', {name:'ok'});
janela.edit.active = true;

//

janela.center();
janela.show();

var cidade = janela.edit.text;

alert("DIGITE A FICHA");

var janela = new Window('dialog', 'FICHA', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], "", {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'FICHA:');
janela.btOk = janela.add('button', [240,35,310,60], 'FICHA', {name:'ok'});
janela.edit.active = true;

janela.center();
janela.show();

var ficha = janela.edit.text;


var resources = new File("N:/resources/"+contrato+".txt");
resources.open('a');
resources.writeln(pastaCurso);
resources.writeln(contrato);
resources.writeln(curso);
resources.writeln(cidade);
resources.writeln(ficha);
resources.close();
*/

var pastaOriginal = new String (pastaCurso);
var tam1 = pastaOriginal.length;
for (var cont; pastaOriginal[tam1] != '/'; tam1 --) { }
var tam2 = tam1;
pastaOriginal= pastaOriginal.substring(0,tam2);
var nomeContrato = new Folder(pastaOriginal);
nomeContrato= nomeContrato.displayName;
for (var cont; pastaOriginal[tam2] != '/'; tam2 --) { }
var nomeFicha=pastaOriginal.substring(0,tam2);
nomeFicha=new Folder(nomeFicha);
nomeFicha=nomeFicha.displayName;
var relatFinal = new File(pastaCurso+'/'+" FICHA PRODUÇÃO MÁQUINA.xls");
 relatFinal.open('a');
relatFinal.writeln (nomeFicha+'/'+nomeContrato+"\n");
relatFinal.close();
for(var i=0; i<listaFormandos.length; i++) {
    var relat = listaFormandos[i].getFiles ("*.jpg");
 var album=listaFormandos[i].displayName;
n=relat.length;
 relatFinal.open('a'); 
relatFinal.writeln ("Album "+album+" ||"+n+" || fotos");
 relatFinal.close();
}


alert("O relatório final de produção foi gerado e salvo dentro dentro do curso.", "Relatório de produção");