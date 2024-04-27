let calculation = '';

function one1(){
    calculation += '1';
    document.getElementById("answer").innerHTML=calculation;

}

function two2(){
    calculation += '2';
    document.getElementById("answer").innerHTML=calculation;
    
}

function three3(){
    calculation += '3';
    document.getElementById("answer").innerHTML=calculation;
   
}

function four4(){
    calculation += '4';
    document.getElementById("answer").innerHTML=calculation;


}

function five5(){
    calculation += '5';
    document.getElementById("answer").innerHTML=calculation;


}

function six6(){
    calculation += '6';
    document.getElementById("answer").innerHTML=calculation;
  

}


function seven7(){
    calculation += '7';
    document.getElementById("answer").innerHTML=calculation;
    

}

function eight8(){
    calculation += '8';
    document.getElementById("answer").innerHTML=calculation;
    

}

function nine9(){
    calculation += '9';
    document.getElementById("answer").innerHTML=calculation;
  

}

function zero0(){
    calculation += '0';
    document.getElementById("answer").innerHTML=calculation;
   

}

function dot(){
    calculation += '.';
    document.getElementById("answer").innerHTML=calculation;
   

}



function add(){
    calculation += ' + ';
    document.getElementById("answer").innerHTML=calculation;
   

}

function sub(){
    calculation += ' - ';
    document.getElementById("answer").innerHTML=calculation;

}

function division(){
    calculation += ' / ';
    document.getElementById("answer").innerHTML=calculation;

}

function multiply(){
    calculation += ' * ';
    document.getElementById("answer").innerHTML=calculation;

}

function equalto(){
    calculation = eval(calculation);
    //alert(calculation);
    document.getElementById("answer").innerHTML=calculation;
}
function cancel(){
    calculation = '';
    document.getElementById("answer").innerHTML=calculation;

}



