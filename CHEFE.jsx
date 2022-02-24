



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
var albuns=new Array;

/*
var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");
*/

var cont=0;
var n=0;
var y=0;
var work=false;
for(var i=0; i<listaFormandos.length; i++) {
    var n=0; 
    var texto = listaFormandos[i].getFiles ("*.txt"); //listas de substas
    var relat1 = listaFormandos[i].getFiles ("*.jpg");
 //   alert(relat1,relat1);
    var lista1= listaFormandos[i].getFiles ("a*");
   // alert(lista1,lista1);
    var lista2= listaFormandos[i].getFiles ("r*");
    //alert(lista2,lista2);
        var lista3= listaFormandos[i].getFiles ("e*");
// alert(lista3,lista3);               
               var lista4= listaFormandos[i].getFiles ("p*");
// alert(lista4,lista4);
var lista5= listaFormandos[i].getFiles ("v*");
// alert(lista5,lista5);
n=relat1.length;
for(var x=0; x<lista1.length; x++) {
var relat = lista1[x].getFiles ("*.jpg");
var n1= relat.length;
n=n+n1;
}
                for(var x=0; x<lista2.length; x++) {
var relat = lista2[x].getFiles ("*.jpg");
var n2 =relat.length;
n=n+n2;
}
                for(var x=0; x<lista3.length; x++) {
var relat = lista3[x].getFiles ("*.jpg");
var n3 =relat.length;
n=n+n3;
}
                for(var x=0; x<lista4.length; x++) {
var relat = lista4[x].getFiles ("*.jpg");
var n4 =relat.length;
n=n+n4;
}
              for(var x=0; x<lista5.length; x++) {
var relat = lista5[x].getFiles ("*.jpg");
var n5 =relat.length;
n=n+n5;
}
  var album=listaFormandos[i].displayName;     


if (cont<10){ // conta até 10 e define os albuns do operador
cont ++;
    if (cont==nop){
    if(work==false){    
    if(texto.length ==0){
      var albuns=new String(album);
      var work=true;
      num=n;
    }
    }
}
}
else{
cont=1;    
    }
    if (cont==nop){
    if(texto.length ==0){
            y++;
        var work=true;
        if (albuns.length<1){
            var albuns=new String(album);
            num=n;
                     }
    }
}
}
if (y>0){
alert("Você ainda tem "+y+" albuns neste curso");
    alert("Seu próximo album é " +albuns+" ele tem "+num+" fotos" );
    alert("FAÇA ABERTURA OU QUALQUER OUTRO TEMPLATE ANTES DE COMEÇAR À TRATÁ-LO" );
}
else{
alert("Seus albuns acabaram, você deverá subir este curso");
doAction('subir', 'Chefe');
    
    }
// alert(texto);
