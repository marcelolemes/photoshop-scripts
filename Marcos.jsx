// pasta dos moldes no servidor
var pastaMolde = new Folder("N:\Decorações");

// identifica contrato a ser trabalhado
var contrato = activeDocument.name.substring(1,5);

// identifica o evento baseado na letra da foto
var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

var evento = "" + nomeFoto[o-6]; 

if (evento==" "){

var evento = "" + nomeFoto[o-5]; }

// filtra os moldes com os parâmetros personalizados

//alert (molde.displayName);

if (evento =='G') 
    switch (documents.length) {
		case 1:	alert("Temp colação  New Templates");
			break;
		case 2:	alert("Lateral New Templates", "");
			break;  
            case 3:	alert("Template 306", "Altra Manual Marcelo");
			break;
             case 4:	alert("Copião","Capa");
			break; 
 
 } 
if (evento =='M')
switch (documents.length){
    	case 1:	alert("Template 306", "Altra Manual Marcelo");
			break;
		case 2:	alert("Template 306", "Altra Manual Marcelo");
			break;  
            case 3:	alert("Template 306", "Altra Manual Marcelo");
			break;
             case 4:	alert("Copião","Capa");
			break;
   
 }

if (documents.length>11 && documents.length<1000){alert("Se Ferrou Manolo(a) (ESPINHAS) " + documents.length + " fotos")}

if (documents.length>2 && documents.length<11){alert( documents.length + " fotos", "Fotos",)}


else {

if (evento =='H') 	
 switch (documents.length) {
		case 1:	alert("Molde Decoração Automático", "New Templates");
			break;
		case 2:	alert("Temp baile", "New Templates");
			break;      
 }

  if (evento =='A') {
	alert("Temp beca", "New Templates");  
 }

   if (evento =='B') {
	alert("Temp c oficial", "New Templates");  
 }
 
     if (evento =='F') {
	alert("Temp coquetel", " New Templates ");  
    }
      
   if (evento =='C') {
	alert("Temp culto", "New Templates");     
    }

    if (evento =='E') {
	alert("Temp jantar", "New Templates");  
    }

     if (evento =='D') {
	alert("Temp missa", "New Templates");  
    }

     if (evento =='I') {
	alert("Temp studio", "New Templates");  
    }


}
