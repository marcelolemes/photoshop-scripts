var id = new File("C:/id.txt"); // Nome do operador
id.open('r');
op = id.readln();
id.close(); 


var n = new File("C:/n.txt"); // NUMERO do operador
n.open('r');
nop = n.readln();
n.close(); 


if(documents.length !=0){
    
	var pastaOriginal = new String (activeDocument.path);
	var tam = pastaOriginal.length;
	for (var cont; pastaOriginal[tam] != '/'; tam --) { }
	var album= activeDocument.path.displayName;
	// cria pasta de escape
	var pastaCurso = new Folder(pastaOriginal.substring(0,tam) );
var listaFormandos = pastaCurso.getFiles ("20*");	
}
else{
var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");    
    }
var cont=0;
var y=0;
for(var i=0; i<listaFormandos.length; i++) {
        var texto = listaFormandos[i].getFiles ("*.txt");
    var relat = listaFormandos[i].getFiles ("*.jpg");
  var album=listaFormandos[i].displayName;     
if (texto.length ==0)
{
    y++;
   var n=i;
    
}

else{
    }
}
if(y>0){
alert("Quantidade de albuns pra subir " +y);
alert("Pegue o album  " +listaFormandos[n].displayName)
alert("FAÇA ABERTURA OU QUALQUER OUTRO TEMPLATE ANTES DE COMEÇAR À TRATÁ-LO" );
}
else
{
alert("Curso TERMINADO, entrar em contato com a Ana Lúcia ou Robson para começar outro curso");
    }
/*
if (y>0){

alert(n);
alert(y);
}
else
{
alert("Curso TERMINADO, entrar em contato com a Ana Lúcia ou Robson para começar outro curso");
    }  */  
    