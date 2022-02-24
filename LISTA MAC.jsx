var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");


var listaFormandos = pastaCurso.getFiles ("20*");
var relatFinal = new File(pastaCurso+'/'+" FICHA MAC.xls");
var total=0; // fotos fora da contagem dos álbuns
relatFinal.open('a');
relatFinal.writeln ("Correcao de cor do curso ");
relatFinal.close(); 
for(var i=0; i<listaFormandos.length; i++) {
    var n=1;
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
n=n+relat1.length;
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
var total=total+n;
 var album=listaFormandos[i].displayName;
relatFinal.open('a');
relatFinal.writeln ("Album "+album+" ||"+n+" || fotos");
alert(n+" fotos")
 relatFinal.close();
 alert(total +" soma atual");
 }
relatFinal.open('a');
relatFinal.writeln ("Total de albuns "+listaFormandos.length);
relatFinal.writeln ("Total de "+total+" fotos");
relatFinal.close();
alert("FICHA DO MAC PRONTA");