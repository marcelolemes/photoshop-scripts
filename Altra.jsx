preferences.rulerUnits = Units.CM
preferences.typeUnits = TypeUnits.PIXELS
if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
 else { var largura = 20; var res = 300; }
activeDocument.resizeImage(largura, null, res);
largura1 = activeDocument.width;


// janelinha
var nomeFoto = activeDocument.name;
for (var o=nomeFoto.length; nomeFoto[o]!='.'; o--) {}

var evento = "" + nomeFoto[o-6]; 

if (evento==" "){

var evento = "" + nomeFoto[o-5]; }



if (documents.length==2){

{doAction('próxima','New Templates')};

    if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
 else { var largura = 20; var res = 300; }
activeDocument.resizeImage(largura, null, res);
var largura2 = activeDocument.width;
var altura2 = activeDocument.heigth;
{doAction('próxima','New Templates')}

if ((largura1 == 20)& (largura2==20))
{var def = "200"};//203
else if (largura1 > largura2)
{var def = "211"};//206
else if (largura1 < largura2)
{var def = "213"};//213
else if ((largura1 == 30)& (largura2==30))
{var def = "208"};//208
};

if (documents.length==3)
{

{doAction('próxima','New Templates')};

    if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
 else { var largura = 20; var res = 300; }
activeDocument.resizeImage(largura, null, res);
activeDocument.selection.selectAll();
var largura3 = activeDocument.width;
var altura3 = activeDocument.heigth;
{doAction('próxima','New Templates')}
 if (activeDocument.width > activeDocument.height) { var largura = 30; var res = 300; }
 else { var largura = 20; var res = 300; }
activeDocument.resizeImage(largura, null, res);
activeDocument.selection.selectAll();
var largura2 = activeDocument.width;
var altura3 = activeDocument.heigth;
{doAction('próxima','New Templates')}
if ((largura1 == 20)& (largura2==20)& (largura3==20))
{var def = "302"};
else if ((largura1 == 20)& (largura2==30)& (largura3==20)){

{var def = "304"}};
else if ((largura1 == 20)& (largura2==30)& (largura3==30))
{var def = "306"};
else if ((largura1 == 30)& (largura2==30)& (largura3==30))
{var def = "311"};//308
else if ((largura1 == 20)& (largura2==20)& (largura3==30))
{var def = "310"};
}

//08/06/11

if (documents.length==1){
if (evento =='G')
{var def = "bus"};
if (evento =='H')
{var def = "bus"};
if (evento =='I')
{var def = "ab"};

};


// 08/06/11

if (documents.length>3 && documents.length<7)
{if (evento =='I')
{var def = "as"};
else
{var def=documents.length}};
if (documents.length>6 && documents.length<13){var def="red"};
if (documents.length>14 && documents.length<31){var def = "sub"};

var janela = new Window('dialog', '"Você quiz dizer?" ', [200,200,530,300]);

janela.edit = janela.add('edittext', [140,20,230,80], def, {multiline:false});
janela.stMsg3 = janela.add('statictext', [20,40,200,70], 'Template:');
janela.btOk = janela.add('button', [240,35,310,60], 'Confirrmar', {name:'ok'});
janela.edit.active = true;

//

janela.center();
janela.show();

var s = janela.edit.text;

if (s =='108') 
{
	doAction('Template 108', 'Altra Manual');
} 
if (s =='109') 
{
	doAction('Template 109', 'Altra Manual');
}  
 
if (s =='110') 
{
	doAction('Template 110', 'Altra Manual');
}   

	if (s =='111') 
{
	doAction('Template 111', 'Altra Manual');
}   
	if (s =='112') 
{
	doAction('Template 112', 'Altra Manual');
}   
   if (s =='113') 
{
	doAction('Template 113', 'Altra Manual'); 
  }
  if (s =='114')
 {
	doAction('Template 114', 'Altra Manual');
    }
    if (s =='115') {
	doAction('Template 115', 'Altra Manual');
    }
    if (s =='116') {
	doAction('Template 116', 'Altra Manual');
    }
    if (s == '200') {
	doAction('Template 200', 'Altra Manual');
}
if (s =='201') {
	doAction('Template 212', 'Altra Manual');
    }
if (s =='202') {
	doAction('Template 202', 'Altra Manual');
    }
    if (s == '203') {
	doAction('Template 203', 'Altra Manual');
}
    if (s == '204') {
	doAction('Template 204', 'Altra Manual');
}	
    if (s == '205') {
	doAction('Template 205', 'Altra Manual');
}
    if (s == '206'){
	doAction('Template 206', 'Altra Manual');
}
    if (s == '207') {
	doAction('Template 207', 'Altra Manual');
}
    if (s == '208') {
	doAction('Template 208', 'Altra Manual');
}
    if (s == '209') {
	doAction('Template 209', 'Altra Manual');
}
    if (s == '210') {
	doAction('Template 210', 'Altra Manual');
}
    if (s == '211') {
	doAction('Template 211', 'Altra Manual');
}
    if (s == '212') {
	doAction('Template 212', 'Altra Manual');
}
    if (s == '213') {
	doAction('Template 213', 'Altra Manual');
}
    if (s == '214') {
	doAction('Template 214', 'Altra Manual');
}
    if (s == '312') {
	doAction('Template 312', 'Altra Manual');
}
    if (s == '309') {
	doAction('Template 309', 'Altra Manual');
}
    if (s == '412') {
	doAction('Template 412', 'Altra Manual');
}
    if (s == '413') {
	doAction('Template 413', 'Altra Manual');
}
   if (s == '301') {
	doAction('Template 301', 'Altra Manual');
}
  if (s == '302') {
	doAction('Template 302', 'Altra Manual');
}

    if (s == '304') {
	doAction('Template 304', 'Altra Manual');
}
    if (s == '306') {
	doAction('Template 306', 'Altra Manual');
}
    if (s == '307') {
	doAction('Template 307', 'Altra Manual');
}
    if (s == '308') {
	doAction('Template 308', 'Altra Manual');
}
    if (s == '310') {
	doAction('Template 310', 'Altra Manual');
}
    if (s == '311') {
	doAction('Template 311', 'Altra Manual');
}
    if (s == '401') {
	doAction('Template 401', 'Altra Manual');
}
    if (s == '403') {
	doAction('Template 403', 'Altra Manual');
}
    if (s == '404') {
	doAction('Template 404', 'Altra Manual');
}
    if (s == '405') {
	doAction('Template 405', 'Altra Manual');
}
    if (s == '407') {
	doAction('Template 407', 'Altra Manual');
}
    if (s == '410') {
	doAction('Template 410', 'Altra Manual');
}
    if (s == '411') {
	doAction('Template 411', 'Altra Manual');
}
    if (s == '501') {
	doAction('Template 501', 'Altra Manual');
}
    if (s == '502') {
	doAction('Template 502', 'Altra Manual');
 }
    if (s == '503') {
	doAction('Template 503', 'Altra Manual');
 }
    if (s == '504') {
	doAction('Template 504', 'Altra Manual');
 }
    if (s == '506') {
	doAction('Template 506', 'Altra Manual');
 }
    if (s == '507') {
	doAction('Template 507', 'Altra Manual');
 }
    if (s == '508') {
	doAction('Template 508', 'Altra Manual');
 }
    if (s == '601') {
	doAction('Template 601', 'Altra Manual');
 }
    if (s == '603') {
	doAction('Template 603', 'Altra Manual');
 }
    if (s =='604') {
	doAction('Template 604', 'Altra Manual');
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
	doAction('Temp colação 2', 'New Templates');  
   } 
    if (s =='COL') {
	doAction('Temp colação 2', 'New Templates');  
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
	doAction('Template 116', 'Altra Manual');  
    }
      if (s =='BUS') {
	doAction('Template 116', 'Altra Manual');  
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
	doAction('> MONTAR!!!', 'Redução New Templates'); 
 }
     if (s =='LAT') {
	doAction('> MONTAR!!!', 'Redução New Templates'); 
 }
     if (s =='la') {
	doAction('> MONTAR!!!', 'Redução New Templates');  
 }
     if (s =='LA') {
	doAction('> MONTAR!!!', 'Redução New Templates');  
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
	doAction('Moldura', 'Moldura');  
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
    if (s =='R') {
	doAction('recomeçar', 'New Templates'); 
}
    if (s =='r') {
	doAction('recomeçar', 'New Templates'); 
}

    if (s =='info') {
	doAction('Info', 'New Templates'); 
}
    if (s =='INFO') {
	doAction('Info', 'New Templates'); 
}

    if (s =='inf') {
	doAction('Info', 'New Templates'); 
}
    if (s =='INF') {
	doAction('Info', 'New Templates'); 
}
    if (s =='RR') {
	doAction('Recomeçar Lateral', 'New Templates'); 
}
    if (s =='rr') {
	doAction('Recomeçar Lateral','New Templates'); 
}


//17-05-11

if (s == '305') {
	doAction('Template 305', 'Altra Manual');
 }
if (s == '307') {
	doAction('Template 307', 'Altra Manual');
 }
if (s == '406') {
	doAction('Template 406', 'Altra Manual');
 }
if (s == '500') {
	doAction('Template 500', 'Altra Manual');
 }
if (s == '505') {
	doAction('Template 505', 'Altra Manual');
 }
if (s == '112i') {
	doAction('Template 112 Invertido', 'Altra Manual');
 }
if (s == '112b') {
	doAction('Template 112 Invertido', 'Altra Manual');
 }
if (s == '112I') {
	doAction('Template 112 Invertido', 'Altra Manual');
 }
if (s == '112B') {
	doAction('Template 112 Invertido', 'Altra Manual');
 }


//18-05-11

if (s == '215') {
	doAction('Template 215', 'Altra Manual');
 }




//01-06-11

if (s == '602') {
	doAction('Template 602', 'Altra Manual');
 }
if (s == '800') {
	doAction('Template 800', 'Altra Manual');
 }
if (s == '801') {
	doAction('Template 801', 'Altra Manual');
 }
if (s == '216') {
	doAction('Template 216', 'Altra Manual');
 }
if (s == '313') {
	doAction('Template 313', 'Altra Manual');
 }

//06-06-11

if (s == '509') {
	doAction('Template 509', 'Altra Manual');
 }

if (s == '510') {
	doAction('Template 510', 'Altra Manual');
 }
if (s == '408') {
	doAction('Template 408', 'Altra Manual');
 }
if (s == '415') {
	doAction('Template 415', 'Altra Manual');
 }
//09/06/11
if (s == '414') {
	doAction('Template 414', 'Altra Manual');
 }


if (s == 'id')
{
var id = new File("C:/id.txt");
id.open('r');
op = id.readln();
id.close(); 
alert (op)}

if (s == 'nome')
{
var janela = new Window('dialog', 'QUAL O SEU NOME?', [200,200,400,270]);
janela.edit = janela.add('edittext', [20,20,100,60], '', {multiline:false});
janela.btOk = janela.add('button', [120,15,170,50], 'Ok!', {name:'ok'});
janela.edit.active = true;
janela.center();
janela.show();

var nome = janela.edit.text

var id = new File("C:/id.txt");
id.open('w');
id.write(nome);
id.close();
}

if (s == '303') {
	doAction('Template 303', 'Altra Manual');
 }
if (s == '217') {
	doAction('Template 217', 'Altra Manual');
 }

//15/06/11
if (s == '402') {
	doAction('Template 402', 'Altra Manual');
 }


//17-06-11
if (s == '409') {
	doAction('Template 409', 'Altra Manual');
 }

if (s == 'sdd') {
	doAction('Temp Aula da saudade', 'New Templates');
 }
if (s == 'SDD') {
	doAction('Temp Aula da saudade', 'New Templates');
 }
//teste agradecimento
if (s == 'ag1') {
    doAction('Agradecimento 1', 'Agradecimento');
 }
if (s == 'ag2') {
    doAction('Agradecimento 2', 'Agradecimento');
 }
if (s == 'ag3') {
    doAction('Agradecimento 3', 'Agradecimento');
 }
if (s == 'cu') {
    doAction('Temp culto ecumenico', 'New Templates');
 }