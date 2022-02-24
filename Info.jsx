jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

var pastaAlbum = activeDocument.path;
var album = pastaAlbum.getFiles ("*");
var parte = new String (pastaAlbum.displayName);
var pastaLetras = new String (pastaAlbum);
var tam1 = pastaLetras.length;
for (var cont; pastaLetras[tam1] != '/'; tam1 --) { }
var tam2 = tam1;
var nomeAlbum=pastaLetras.substring(0,tam2);
nomeAlbum=new Folder(nomeAlbum);
alert(nomeAlbum);

for(var i=0; i<pastaAlbum.length; i++) {
    var n=0;
    var relat1 = pastaAlbum.getFiles ("*.jpg");
    alert(relat1.length);
 //alert(relat1,relat1);
  var lista1= nomeAlbum.getFiles ("0*");
    //alert(lista1,lista1);
            var lista2= nomeAlbum.getFiles ("r*");
    //alert(lista2,lista2);
        var lista3= nomeAlbum.getFiles ("e*");
// alert(lista3,lista3);               
        var lista4= nomeAlbum.getFiles ("p*");
// alert(lista4,lista4);
var lista5= nomeAlbum.getFiles ("v*");
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
alert(total);
 
 }
//alert(total);
/*
if (documents.length > 0) 
	var pastaCurso = activeDocument.path;
	var lista = pastaCurso.getFiles("*");
    var quan = lista.length;
    quan2 = (quan-1);
	alert("Este Album tem "+ quan2+" fotos");
 var quan3 = ((quan2/100)*30); 
 
 alert("Deixar "+quan3+" fotos comuns no Album BLZ???");
 */