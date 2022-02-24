jpgSaveOptions = new JPEGSaveOptions();
jpgSaveOptions.embedColorProfile = true;
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
jpgSaveOptions.matte = MatteType.NONE;
jpgSaveOptions.quality = 12;

      

var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 

var x=0;

  

if (documents.length > 0) {
    var pastaAlbum = activeDocument.path;
    var caminho = activeDocument.path;
var res = new File("N:/resources/"+op+".txt");
res.open('w');
	res.writeln(caminho);
	res.close();
	var txt = pastaAlbum.getFiles("*.txt");
    if (txt.length<1){
        //salva a foto
        
        var nome = activeDocument.name;
    
           
for (var i=0; nome[i] != '.'; i ++) { }

var nome = nome.substring(0,i);
jpegFile = new File(pastaAlbum + "/" + nome + ".jpg")
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
//activeDocument.close(SaveOptions.DONOTSAVECHANGES);


var caminhoBusto= new String (pastaAlbum);
var tam = caminhoBusto.length;
for (var cont; caminhoBusto[tam] != '/'; tam --) { }
var escapeBusto = new Folder(caminhoBusto.substring(0,tam) + '/Bustos tratados/' + activeDocument.path.displayName);
escapeBusto.create();
jpegFileBusto = new File(escapeBusto + "/" + nome + ".jpg")
activeDocument.saveAs(jpegFileBusto, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            var fotos = pastaAlbum.getFiles("*.jpg");
            
            //abre a próxima
            open(fotos[x+1]);
        //cria o txt
        var relat = new File(pastaAlbum+'/'+"Índice "+op+".txt");    	
relat.open('a');
	relat.writeln(x+1);
	relat.close();
  
 /* 
    res.open('a');
	res.writeln(x);
	res.close(); */
        x++;
        
        
        

    
      var quan = fotos.length;
/*    
    quan2 = (quan);
	alert("Este Album tem "+ quan2+" fotos");
    */
   }
else{
    if  (txt.length<2){
if  (txt[0].displayName.substring (7, txt[0].displayName.length-4)==op){
//alert("Seu album");
//salva a  foto
var relat = new File(pastaAlbum+'/'+"Índice "+op+".txt"); 	
relat.open('a');
x = relat.readln();
relat.close();
//alert(x);
x++;


        var nome = activeDocument.name;
for (var i=0; nome[i] != '.'; i ++) { }

var nome = nome.substring(0,i);

jpegFile = new File(pastaAlbum + "/" + nome + ".jpg")
activeDocument.saveAs(jpegFile, jpgSaveOptions, true, Extension.LOWERCASE);
//activeDocument.close(SaveOptions.DONOTSAVECHANGES);


var caminhoBusto= new String (pastaAlbum);
var tam = caminhoBusto.length;
for (var cont; caminhoBusto[tam] != '/'; tam --) { }
var escapeBusto = new Folder(caminhoBusto.substring(0,tam) + '/Bustos tratados/' + activeDocument.path.displayName);
escapeBusto.create();
jpegFileBusto = new File(escapeBusto + "/" + nome + ".jpg")
activeDocument.saveAs(jpegFileBusto, jpgSaveOptions, true, Extension.LOWERCASE);
activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                    
            //abre a próxima
 var fotos = pastaAlbum.getFiles("*.jpg")
 if(x<fotos.length){
open(fotos[x]);
relat.open('w');
//alert(x);
relat.writeln(x);
relat.close();
}
else{
    alert ("Fim de album", "FIM")}
}
    else{
    alert ("Album já em tratamento "+txt[0].displayName.substring (7, txt[0].displayName.length-4)+ " tratando", "Vá para outro álbum");
    }}
    else
    alert ("Album com mais de um operador, "+txt[0].displayName.substring (7, txt[0].displayName.length-4)+" e "+txt[1].displayName.substring (7, txt[1].displayName.length-4)+" informem o portador da lista");
    }
   
   
   
   
   
 

 }
 
 

else{
    var res = new File("N:/resources/"+op+".txt");
res.open('a');
caminho=new Folder (res.readln());
    res.close();
    var fotos = caminho.getFiles("*.jpg");
    var relat = new File(caminho+'/'+"Índice "+op+".txt"); 	
relat.open('a');
x = relat.readln();
relat.close();
try{
open(fotos[x]);
    }
catch(fotos){
    alert("Sem caminho pré-estabelecido, ou fotos abertas, favor começar um album")}
    

    }