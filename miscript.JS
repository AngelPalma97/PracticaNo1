var inputNum1=Number(prompt("Ingrese el primer número: "));
var inputNum2=Number(prompt("Ingrese el segundo número: "));
var inputNum3=Number(prompt("Ingrese el tercer número: "));

if(inputNum1>inputNum2) {

    if (inputNum1>inputNum3){
    
        document.write('<h2>El número mayor es: </h2>' + inputNum1);

        }
        
        else{
        document.write('<h2>El número mayor es: </h2>'+ inputNum3);
        
       }
    }

    else if(inputNum2> inputNum3){
        document.write('<h2>El número mayor es: </h2>'  + inputNum2)
    }
    else{
        document.write('<h2>El número mayor es: </h2>'+ inputNum3);

    }

