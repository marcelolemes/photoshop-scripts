var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");

var relatFinal = new File(pastaCurso+'/'+" FICHA PRODUÇÃO.txt");
relatFinal.open('a');
relatFinal.writeln ("***FICHA DE PRODUÇÃO ***");
relatFinal.close();
var cont=0;
var n=0;
for(var i=0; i<listaFormandos.length; i++) {
    var n=0;
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

if (cont<10){
cont ++;
}
else{
cont=1;    
    }
relatFinal.open('a');
relatFinal.writeln ("NÚMERO DO OPERADOR DESIGNADO ||| "+cont +"  -----> " +" Album "+album+" ||"+n+" || fotos");
 relatFinal.close();
}

alert("FICHA PRONTA", "Em nome de chessuis");