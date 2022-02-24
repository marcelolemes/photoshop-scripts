var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 









// pasta dos moldes no servidor
var pastaMolde = new Folder("N:\Decorações");

// identifica contrato a ser trabalhado
var contrato = activeDocument.name.substring(1,5);

// identifica o evento baseado na letra da foto
var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

if (o =="9"){

var evento = "" + nomeFoto[o-5];
}
if (o =="10"){

var evento = "" + nomeFoto[o-6];
}

// filtra os moldes com os parâmetros personalizados
var molde = new File (pastaMolde.getFiles(contrato + "*" + evento + ".PSD"));
//alert (molde.displayName);
if (documents.length>3 && documents.length<25){doAction('Mandar','Capa')};
else {
if (evento =='G') 
    switch (documents.length){
			case 1:	doAction('Temp colação', 'New Templates');
			break;
		case 2:	doAction('Temp colação', 'New Templates');
			break;  
           
 } 
if (evento =='M')
switch (documents.length){
    	case 1:	doAction('Template 306', 'Altra Manual Marcelo');
			break;
		case 2:	doAction('Template 306', 'Altra Manual Marcelo');
			break;  
            case 3:	doAction('Template 306', 'Altra Manual Marcelo');
			break;

   
 }
     if (evento =='D')  
     switch (documents.length){
		case 1:	doAction('Temp missa', 'New Templates');
			break;
		case 2:	doAction('Temp missa', 'New Templates');
			break;  
            case 3:	doAction('Template 306', 'Altra Manual Marcelo');
			break;
              
} 

   if (evento =='C') 
     switch (documents.length){
		case 1:	doAction('Temp culto', 'New Templates');
			break;
		case 2:	doAction('Temp culto', 'New Templates');
			break;  
            case 3:	doAction('Template 306', 'Altra Manual Marcelo');
			break;
            
} 





if (evento =='H') 

 switch (documents.length) {
			case 1:	doAction('Temp baile', 'New Templates');
			break;
		case 2:	doAction('Temp baile', 'New Templates');
			break;  
}

if (evento =='A')  
switch (documents.length) {
		case 1:	doAction('Moldura', 'Moldura');
			break;
		case 2:	doAction('Temp beca', 'New Templates');
			break;
		case 3:	doAction('Temp Beca Com Três Fotos', 'New Templates');
			break;  
}

   if (evento =='B')
  switch (documents.length){
		case 1:	doAction('Temp c oficial', 'New Templates'); 
			break;
		case 2:	doAction('> MONTAR!!!', 'Lateral New Templates');
			break;  
            case 3:	doAction('Template 306', 'Altra Manual Marcelo');
			break;
} 
     if (evento =='F') {
	doAction('Temp coquetel', 'New Templates');  
    }
      

    if (evento =='E') {
        doAction('Temp jantar', 'New Templates');

}

     if (evento =='I') {
	doAction('Temp studio', 'New Templates');  
  }

     if (evento =='P') {
	doAction('Temp p lâmpada', 'New Templates');  
  }
}