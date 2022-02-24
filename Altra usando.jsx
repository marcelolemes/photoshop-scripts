// janelinha

var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

var evento = "" + nomeFoto[o-6]; 

if (evento==" "){

var evento = "" + nomeFoto[o-5]; }


if (documents.length==1)
{var def = "ab"};

if (documents.length==2)
{var def = "la"};

if (documents.length==3)
{var def = "308"};

else if ((documents.length==2)&(evento=="H"))
{var def="p"}


if (documents.length>3 && documents.length<13){var def = "red"};
if (documents.length>14 && documents.length<31){var def = "sub"};

var janela = new Window('dialog', 'Você Quis Dizer ???', [200,200,530,300]);

janela.edSozinha = janela.add('edittext', [140,20,230,80], def, {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'Template:');
janela.btOk = janela.add('button', [240,35,310,60], 'Confirrmar', {name:'ok'});

//

janela.center();
janela.show();

var s = janela.edSozinha.text;

	if (s =='111') 
{
	doAction('Template 111', 'Altra Manual Marcelo');
}   
   if (s =='113') 
{
	doAction('Template 113', 'Altra Manual Marcelo'); 
  }
  if (s =='114')
 {
	doAction('Template 114', 'Altra Manual Marcelo');}
    if (s =='115') {
	doAction('Template 115', 'Altra Manual Marcelo');
    }
if (s =='201') {
	doAction('Template 201', 'Altra Manual Marcelo');
    }

    if (s == '203') {
	doAction('Template 203', 'Altra Manual Marcelo');
}	
    if (s == '205') {
	doAction('Template 205', 'Altra Manual Marcelo');
}
    if (s == '206'){
	doAction('Template 206', 'Altra Manual Marcelo');
}
    if (s == '207') {
	doAction('Template 207', 'Altra Manual Marcelo');
}
    if (s == '208') {
	doAction('Template 208', 'Altra Manual Marcelo');
}
    if (s == '209') {
	doAction('Template 209', 'Altra Manual Marcelo');
}
    if (s == '301') {
	doAction('Template 301', 'Altra Manual Marcelo');
}
  if (s == '302') {
	doAction('Template 302', 'Altra Manual Marcelo');
}

    if (s == '304') {
	doAction('Template 304', 'Altra Manual Marcelo');
}
    if (s == '306') {
	doAction('Template 306', 'Altra Manual Marcelo');
}
    if (s == '308') {
	doAction('Template 308', 'Altra Manual Marcelo');
}
    if (s == '310') {
	doAction('Template 310', 'Altra Manual Marcelo');
}
    if (s == '311') {
	doAction('Template 311', 'Altra Manual Marcelo');
}
    if (s == '401') {
	doAction('Template 401', 'Altra Manual Marcelo');
}
    if (s == '403') {
	doAction('Template 403', 'Altra Manual Marcelo');
}
    if (s == '404') {
	doAction('Template 404', 'Altra Manual Marcelo');
}
    if (s == '405') {
	doAction('Template 405', 'Altra Manual Marcelo');
}
    if (s == '407') {
	doAction('Template 407', 'Altra Manual Marcelo');
}
    if (s == '410') {
	doAction('Template 410', 'Altra Manual Marcelo');
}
    if (s == '411') {
	doAction('Template 411', 'Altra Manual Marcelo');
}
    if (s == '501') {
	doAction('Template 501', 'Altra Manual Marcelo');
}
    if (s == '502') {
	doAction('Template 502', 'Altra Manual Marcelo');
 }
    if (s == '503') {
	doAction('Template 503', 'Altra Manual Marcelo');
 }
    if (s == '504') {
	doAction('Template 504', 'Altra Manual Marcelo');
 }
    if (s == '506') {
	doAction('Template 506', 'Altra Manual Marcelo');
 }
    if (s == '507') {
	doAction('Template 507', 'Altra Manual Marcelo');
 }
    if (s == '508') {
	doAction('Template 508', 'Altra Manual Marcelo');
 }
    if (s == '601') {
	doAction('Template 601', 'Altra Manual Marcelo');
 }
    if (s == '603') {
	doAction('Template 603', 'Altra Manual Marcelo');
 }
    if (s =='604') {
	doAction('Template 604', 'Altra Manual Marcelo');
 }   
    if (s =='pais') {
	doAction('Dupla pais', 'New Templates'); 
 }
    if (s =='PAIS') {
	doAction('Dupla pais', 'New Templates'); 
 }
    if (s =='p') {
	doAction('Dupla pais', 'New Templates'); 
 }
    if (s =='P') {
	doAction('Dupla pais', 'New Templates'); 
 }
    if (s =='d') {
	doAction('Molde Decoração Automático', 'New Templates');   
}  
    if (s =='D') {
	doAction('Molde Decoração Automático', 'New Templates');   
} 
   if (s =='ab') {
	doAction('Temp AB', 'New Templates');  
  }
   if (s =='AB') {
	doAction('Temp AB', 'New Templates');  
  }
  if (s =='bai') {
	doAction('Temp baile', 'New Templates');  
 }
  if (s =='BAI') {
	doAction('Temp baile', 'New Templates');  
 }
  if (s =='bec') {
	doAction('Temp beca', 'New Templates');  
 }
  if (s =='BEC') {
	doAction('Temp beca', 'New Templates');  
 }
   if (s =='cof') {
	doAction('Temp c oficial', 'New Templates');  
 }
 
   if (s =='COF') {
	doAction('Temp c oficial', 'New Templates');  
 }
    if (s =='col') {
	doAction('Temp colação', 'New Templates');  
   } 
    if (s =='COL') {
	doAction('Temp colação', 'New Templates');  
   } 
   if (s =='cul') {
	doAction('Temp culto', 'New Templates');     
    }
   if (s =='CUL') {
	doAction('Temp culto', 'New Templates');     
    }
    if (s =='jan') {
	doAction('Temp jantar', 'New Templates');  
    }
    if (s =='JAN') {
	doAction('Temp jantar', 'New Templates');  
    }
     if (s =='mis') {
	doAction('Temp missa', 'New Templates');  
    }
     if (s =='MIS') {
	doAction('Temp missa', 'New Templates');  
    }
     if (s =='stu') {
	doAction('Temp studio', 'New Templates');  
    }
     if (s =='STU') {
	doAction('Temp studio', 'New Templates');  
    }
      if (s =='bus') {
	doAction('Dupla busto', 'New Templates');  
    }
      if (s =='BUS') {
	doAction('Dupla busto', 'New Templates');  
    }
       if (s =='sub') {
	doAction('Substituir!!!', 'Substituir');  
    }
       if (s =='SUB') {
	doAction('Substituir!!!', 'Substituir');  
    }
      if (s =='red') {
	doAction('> MONTAR!!!', 'Redução New Templates');  
    }
      if (s =='RED') {
	doAction('> MONTAR!!!', 'Redução New Templates');  
    }
     if (s =='lat') {
	doAction('> MONTAR!!!', 'Lateral New Templates');  
 }
     if (s =='LAT') {
	doAction('> MONTAR!!!', 'Lateral New Templates');  
 }
     if (s =='la') {
	doAction('> MONTAR!!!', 'Lateral New Templates');  
 }
     if (s =='LA') {
	doAction('> MONTAR!!!', 'Lateral New Templates');  
 }
  
     if (s =='1-01') {
	doAction('Clip 1-01', 'New Templates');  
 }
 
     if (s =='1-02') {
	doAction('Clip 1-02', 'New Templates');  
 }
      if (s =='1-03') {
	doAction('Clip 1-03', 'New Templates');  
 }
      if (s =='1-04') {
	doAction('Clip 1-04', 'New Templates');  
 }
      if (s =='2-01') {
	doAction('Clip 2-01', 'New Templates');  
 }
      if (s =='2-02') {
	doAction('Clip 2-02', 'New Templates');  
 }
      if (s =='2-03') {
	doAction('Clip 2-03', 'New Templates');  
 }
      if (s =='3-01') {
	doAction('CLIP 3-01 ', 'New Templates');  
 }
      if (s =='as') {
	doAction('> MONTAR!!!', 'Art Studio New Templates');  
 }
      if (s =='AS') {
	doAction('> MONTAR!!!', 'Art Studio New Templates');  
 }
      if (s =='ASI') {
	doAction('> MONTAR!!!', 'Art Studio New Templates Invertido');  
 }
      if (s =='asi') {
	doAction('> MONTAR!!!', 'Art Studio New Templates Invertido');  
 }

      if (s =='c') {
	doAction('Capa', 'Capa');  
 }
      if (s =='m') {
	doAction('Mandar', 'Capa');  
 }
      if (s =='des') {
	doAction('Desfocadas', 'will');  
 }
      if (s =='C') {
	doAction('Capa', 'Capa');  
 }
      if (s =='M') {
	doAction('Mandar', 'Capa');  
 }
      if (s =='DES') {
	doAction('Desfocadas', 'will');  
 }
      if (s =='sal') {
	doAction('salvar', 'will');  
 }
    if (s =='pi') {
	doAction('Dupla pais Invertido', 'New Templates'); 
 }
    if (s =='PI') {
	doAction('Dupla pais Invertido', 'New Templates'); 
  }
    if (s =='Pi') {
	doAction('Dupla pais Invertido', 'New Templates'); 
}
    if (s =='pI') {
	doAction('Dupla pais Invertido', 'New Templates'); 
}