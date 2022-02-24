{
// pasta dos moldes no servidor
var pastaMolde = new Folder("N:/Decorações");

// identifica contrato a ser trabalhado
var contrato = activeDocument.name.substring(1,5);

// identifica o evento baseado na letra da foto
var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

if (o =="9"){

var evento = "" + nomeFoto[o-5];
}

if (o =="10"){

var evento = "" + nomeFoto[o-5]; /*[o-5];*/
if (evento==" "){
    var evento = "" + nomeFoto[o-1];
    }
}
if (o =="11"){

var evento = "" + nomeFoto[o-6]; /*[o-6];*/
if (evento==" "){
    var evento = "" + nomeFoto[o-1];
    }
} 
if (o =="12"){

var evento = "" + nomeFoto[o-6]; /*[o-6];*/
if (evento==" "){
    var evento = "" + nomeFoto[o-1];
    }
} 
if (o =="13"){

var evento = "" + nomeFoto[o-7]; /*[o-6];*/
if (evento==" "){
    var evento = "" + nomeFoto[o-1];
    }
} 
if (o =="14"){

var evento = "" + nomeFoto[o-7]; /*[o-6];*/
} 



// filtra os moldes com os parâmetros personalizados
var molde = new File (pastaMolde.getFiles(contrato + "*" + evento + ".PSD"));
//alert (molde.length);
}
//alert(contrato);
// abre o molde
moldeq=molde.length;
//alert(moldeq);
if (moldeq==-1)
{
if (evento =='H')
doAction('Temp baile só uma foto', 'New Templates');
if (evento =='E')
doAction('Temp jantar', 'New Templates')
if (evento =='G')
doAction('Temp colação', 'New Templates')

}
else 
doAction('Molde Decoração Automático', 'New Templates');