{
// pasta dos moldes no servidor
var pastaMolde = new Folder("Y:/Templates 2011/NEW TEMPLATES/Decora��es");

// identifica contrato a ser trabalhado
var contrato = activeDocument.name.substring(1,5);

// identifica o evento baseado na letra da foto
var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

if (o =="10"){

var evento = "" + nomeFoto[o-5];
}
if (o =="11"){

var evento = "" + nomeFoto[o-6];
}
// filtra os moldes com os par�metros personalizados
var molde = new File (pastaMolde.getFiles(contrato + "*" + evento + ".PSD"));
// alert (molde.length);
}
// abre o molde
moldeq=molde.length;

if (moldeq==-1)
{
if (evento =='H')
doAction('Temp baile s� uma foto', 'New Templates');
if (evento =='E')
doAction('Temp jantar', 'New Templates')
if (evento =='G')
doAction('Temp cola��o', 'New Templates')

}
else 
doAction('Molde Decora��o Autom�tico', 'New Templates');