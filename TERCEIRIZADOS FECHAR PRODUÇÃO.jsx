var resources = new Folder("N:/resource");
resourcesfiles=resources .getFiles ("*.txt");
if
(resourcesfiles.length>0)
{

resourcesfiles[0].open('r');
var pastacurso= resourcesfiles[0].readln();
var contrato= resourcesfiles[0].readln();
var curso= resourcesfiles[0].readln();
var cidade= resourcesfiles[0].readln();
var ficha = resourcesfiles[0].readln();
alert("Cursos à serem fechados "+resourcesfiles.length+" contrato que será fechado ->"+contrato );
var pastaCurso=new Folder(pastacurso);
remover=new File (resources+ '/' +resourcesfiles[0].displayName);
resourcesfiles[0].close();
resourcesfiles[0].remove();
}
else
{
var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");


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

//
alert("DIGITE O NOME DO TERCERIZADO");

var janela = new Window('dialog', 'FICHA', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], "", {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'NOME:');
janela.btOk = janela.add('button', [240,35,310,60], 'GO!!!', {name:'ok'});
janela.edit.active = true;

janela.center();
janela.show();

var nome = janela.edit.text;

    }




var listaFormandos = pastaCurso.getFiles ("20*");
var relatFinal = new File(pastaCurso+'/'+nome+".html");
var mais100=0;
var mais50=0;
var menos50=0;
var total=0;
var qtdealbuns=listaFormandos.length;
var menosde20a=0;
var menosde20b=0;
var menosde20=0;

    var npastaCurso= new String (pastaCurso);
    var tam = npastaCurso.length;
	for (var cont; npastaCurso[tam] != '/'; tam --) { }
	// cria pasta de escape
	var subpastaCurso = new Folder(npastaCurso.substring(0,tam) );
var listamenosde20a=subpastaCurso.getFiles ("*-20*");
var listamenosde20b=subpastaCurso.getFiles ("*menos*");
if (listamenosde20a.length>0)
menosde20a=listamenosde20a[0].getFiles ("20*");
else if (listamenosde20b.length>0)
menosde20a=listamenosde20b[0].getFiles ("20*");


var listamenosde20c=pastaCurso.getFiles ("*-20*");
var listamenosde20d=pastaCurso.getFiles ("*menos*");

if (listamenosde20c.length>0)
menosde20b=listamenosde20c[0].getFiles ("20*");
else if (listamenosde20d.length>0)
menosde20b=listamenosde20d[0].getFiles ("20*");

if (menosde20a !=0 && menosde20b !=0){
menosde20=menosde20a.length+menosde20b.length;
}
else{
if (menosde20a !=0)
menosde20=menosde20a.length;
else if (menosde20b !=0) 
menosde20=menosde20b.length;
}


for(var i=0; i<listaFormandos.length; i++) {
    var relat = listaFormandos[i].getFiles ("*.jpg");
    
var album=listaFormandos[i].displayName;
n=relat.length;
if(n>=100){
    mais100++; 
    total=total+n;
    }
else{
if (n>=50){
mais50++;    
total=total+n;
}
else{
menos50++;    
total=total+n;
}}
var data = new Date();
var datadehj =(data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear());

}

//

relatFinal.open('a');
relatFinal.writeln ("<html>");
relatFinal.writeln ("<body>");
relatFinal.writeln ("<blockquote><blockquote>");
relatFinal.writeln ("<font face=arial>");
relatFinal.writeln ("<center>");
relatFinal.writeln ("<table border=1 cellspacing=0 cellpadding= 4> ");
relatFinal.writeln ("<tr> <td colspan=4><b><center> Produção Terceirizado</center> </b></td> </tr> ");
relatFinal.writeln ("<tr> <td><b>Data entrega </b></td>");
relatFinal.writeln ("<td><i> DATA: "+datadehj+" </i></td>");
relatFinal.writeln ("<td> FICHA: "+ficha+" </td>");
relatFinal.writeln ("<td><font color=red face=verdana size=2><b><center> Albuns Tratados </center></font></b> </td> </tr>");
 relatFinal.writeln ("<tr> <td><b>Curso </b></td>");
relatFinal.writeln ("<td>"+curso+"</td>");
relatFinal.writeln ("<td><b>CIDADE </b></td>");
relatFinal.writeln ("<td>"+cidade+"</td></tr> ");
relatFinal.writeln ("<tr> <td><b>Contrato </b></td>");
relatFinal.writeln ("<td> "+contrato+"</td>");
relatFinal.writeln ("<td> </td>");
relatFinal.writeln ("<td rowspan=7><IMG src=N:\logo.jpg></IMG> </td>");
 relatFinal.writeln ("</tr> ");
relatFinal.writeln ("<tr> <td><b>Produção</b></td>");
relatFinal.writeln ("<td>"+total+"</td>");
relatFinal.writeln ("<td><b><center>20 X 30 </center></b></td>");
 relatFinal.writeln ("</tr> ");
relatFinal.writeln ("<tr> <td><b>TOTAL ALBUNS </b></td>");
relatFinal.writeln ("<td> "+qtdealbuns+"</td>");
relatFinal.writeln ("<td></td>");
 relatFinal.writeln ("</tr> ");
 relatFinal.writeln ("<tr> <td><b>+ 100 fotos </b></td>");
relatFinal.writeln ("<td> "+mais100+"</td>");
relatFinal.writeln ("<td></td>");
relatFinal.writeln ("<tr> <td><b>+ 50 fotos </b></td>");
relatFinal.writeln ("<td> "+mais50+"</td>");
relatFinal.writeln ("<td></td>");
 relatFinal.writeln ("</tr> ");
relatFinal.writeln ("<tr> <td><b>- 50 fotos </b></td>");
relatFinal.writeln ("<td>"+menos50+"</td>");
relatFinal.writeln ("<td></td>");
 relatFinal.writeln ("</tr> ");
relatFinal.writeln ("<tr> <td><b>- 20 fotos </b></td>");
relatFinal.writeln ("<td> "+menosde20+"</td>");
relatFinal.writeln ("<td></td>");
 relatFinal.writeln ("</tr> ");
relatFinal.writeln ("</table>");
relatFinal.writeln ("<br>");
relatFinal.writeln ("<br>");
relatFinal.writeln ("<blockquote>_____________________________________</blockquote><br>");
relatFinal.writeln ("<blockquote><blockquote>Megapixel Laboratório fotográfico</blockquote></blockquote></blockquote><br><br>");
relatFinal.writeln ("<center>");
relatFinal.writeln ("PRODUZIDO POR ____________"+nome+"_________________</blockquote></blockquote<br><br><center>");
relatFinal.writeln ("ASSINATURA______________________________________<br>");
relatFinal.writeln ("<blockquote><blockquote><blockquote><blockquote><b>Daelson</blockquote></blockquote></blockquote></blockquote></b><br><br>");
relatFinal.writeln ("<blockquote><blockquote><blockquote><blockquote><b>Comprovante de pagamento</blockquote></blockquote></blockquote></blockquote></b>");
relatFinal.writeln ("</body>");


relatFinal.close();

alert("CURSO FECHADO abra o arquivo .HTML no navegador e pressione CTRL+P para imprimí-lo", "FECHAR CURSO");

/*relatFinal.writeln (" *** FIM DE CURSO *** ");
relatFinal.writeln (qtdealbuns+" Albuns");
relatFinal.writeln (mais50+" Albuns com MAIS de 50 fotos");
relatFinal.writeln (menos50+" Albuns com MENOS de 50 fotos");
relatFinal.writeln (total+" total de fotos no curso");
relatFinal.writeln (qtdealbuns+" quantidade de albuns");
relatFinal.writeln ((qtdealbuns*2)+" quantidade de IDENTIFICAÇÕES");
*/ 