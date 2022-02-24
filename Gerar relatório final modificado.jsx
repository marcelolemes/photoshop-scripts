var pastaCurso = Folder.selectDialog ("Selecione a pasta do contrato:");
var listaFormandos = pastaCurso.getFiles ("20*");
// operadores
var chico=0;
var bozin=0;
var Fernando=0;
var FRAN=0;
var Gabriel=0;
var GustavoM=0;
var GustavoB=0;
var Marcelo=0;
var MAleixo=0;
var Michele=0;
var Roberta=0;
var Sergio=0;
var Thais=0;
var Joao=0;
var Aline=0;
var Daelson=0;
var Ana=0;
 //operadores    


var relatFinal = new File(pastaCurso+'/'+" Relatório final.txt");

var contador=0;

for(var i=0; i<listaFormandos.length; i++) {
    var relat = new File(listaFormandos[i].getFiles ("*.txt"));
relat=relat.displayName;
n=relat.length;
relat=relat.substring (2, n-4);
//if (relat==op)    //swich case
	// contador++;
    
    

switch (relat) {
		case "chico": chico++;
			break;
		case "bozin": bozin++;	
			break;
		case "Fernando":Fernando++;
			break;
		case "FRAN": FRAN++;
			break;
		case "Gabriel":Gabriel++;
            break;
            case "Gustavo Muniz":GustavoM++;
            break;
             case "Gustavo Bragante":GustavoB++;
            break;
            case "Marcelo":Marcelo++;
            break;            
            case "M.Aleixo":MAleixo++;
            break;
            case "Aleixo":MAleixo++;
            break;
            case "Michele":Michele++;
            break;
             case "ichele":Michele++;
            break;
             case "Roberta":Roberta++;
            break;
            case "Sérgio G. F. Sanches":Sergio++;
            break;
            case "Sérgio Sanches":Sergio++;
            break;
            case "Thaís":Thais++;
            break;
        case "joao":Joao++;
             break;
             case "aline":Aline++;
             break;
             case "Aline":Aline++;
             break;
             case "joão":Joao++;
             break;
             case "João":Joao++;
             break;
    case "Daelson":Daelson++;
             break;
    case "daelson":Daelson++;
             break;    
             case "ana":Ana++;
             break;
             case "Ana":Ana++;
             break;
	}

}

relatFinal.open('a');
relatFinal.writeln ("Quantidade de albuns detectados "+ listaFormandos.length);
relatFinal.writeln (" ");
relatFinal.writeln ("Quantidade de ARQUIVOS DE TEXTO detectados "+(chico+bozin+FRAN+Gabriel+GustavoM+GustavoB+Marcelo+MAleixo+Michele+Roberta+Sergio+Thais+Daelson+Joao+Aline+Ana) );

relatFinal.writeln ("Francisco        "+chico+"  Albuns ");
relatFinal.writeln ("Guilherme        " +bozin+"  Albuns ");
relatFinal.writeln ("Fernando         " +Fernando+"  Albuns ");
relatFinal.writeln ("FRAN             " +FRAN+"  Albuns ");
relatFinal.writeln ("Gabriel          " +Gabriel+"  Albuns ");
relatFinal.writeln ("Gustavo Muniz    " +GustavoM+"  Albuns ");
relatFinal.writeln ("Gustavo Bragante " +GustavoB+"  Albuns ");
relatFinal.writeln ("Marcelo          " +Marcelo+"  Albuns ");
relatFinal.writeln ("Marcelo Aleixo   " +MAleixo+"  Albuns ");
relatFinal.writeln ("Michele          " +Michele+"  Albuns ");
relatFinal.writeln ("Roberta          " +Roberta+"  Albuns ");
relatFinal.writeln ("Sérgio           " +Sergio+"  Albuns ");
relatFinal.writeln ("Thaís Toledo     " +Thais+"  Albuns ");
relatFinal.writeln ("Daelson           " +Daelson+"  Albuns ");
relatFinal.writeln ("João              " +Joao+"  Albuns ");
relatFinal.writeln ("Aline           " +Aline+"  Albuns ");
relatFinal.writeln ("Ana          " +Ana+"  Albuns ");
 relatFinal.close();

alert("O relatório final de produção foi gerado e salvo dentro dentro do curso.", "Relatório de produção");