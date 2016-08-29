var condicion = true;
do {
        var opciones = parseInt(prompt("escoja una opción: \n" + 
        	"1. Suma\n" +
        	"2. Resta\n" +
            "3. Multiplicación\n" +
            "4. División\n" +
            "5. Residuo\n" +
            "6. Potencia\n" + 
            "7. Raíz Cuadrada\n" + 
            "0. Salir"
        ));

        var numero1 = parseInt(prompt("Ingresa el primer número"));
        var numero2 = parseInt(prompt("Ingresa el segundo número"));


        switch(opciones){
        	case 1:
        	var suma = numero1 + numero2;
        	window.alert("La suma es:" + suma);
        	break;
                
        	case 2:
        	var resta = numero1 - numero2;
        	window.alert("La resta es:" + resta);
                break;
                
            case 3:
            var multiplicacion = numero1 * numero2;
            window.alert("La multiplicacion es:" + multiplicacion);    
                break;
                
            case 4:
            var division = numero1 / numero2;
            window.alert("La division es:" + division);    
                break;
                
            case 5:
            var residuo = numero1 % numero2;
            window.alert("El residuo es:" + residuo);    
                break;
                
            case 6:    
            var potencia = Math.pow(numero1,numero2);
            window.alert("La potencia es:" + potencia);    
            	break;
            
            case 7:    
            var  raizcuadrada = Math.sqrt(numero1,1/2);
            window.alert("La raíz cuadrada es " + raizcuadrada);
            	break;

        	case 0:
                    condicion= false;
            default:
        	window.alert("no es una opción valida");
            	break;	
        }
} while(condicion);