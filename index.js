function Calculate() {
    bin1 = document.getElementById("bin1").value;
    bin2 = document.getElementById("bin2").value;

    console.log("Binario 1 inicial: " + bin1);
    console.log("Binario 2 inicial: " + bin2);

    let j = Math.max(bin1.length, bin2.length);
    //Deixa os binarios com o mesmo tamanho
    bin1 = bin1.padStart(j, '0');
    bin2 = bin2.padStart(j, '0');
    
    console.log("Binario 1 ++: " + bin1);
    console.log("Binario 2 ++: " + bin2);

    bin1 = bin1.split('').reverse().join('');
    bin2 = bin2.split('').reverse().join('');

    console.log("Binario 1 final: " + bin1);
    console.log("Binario 2 final: " + bin2);

    let result;
    let finalResult = [];
    let aux = 0;

    for (i = 0; i <= j; i++) {
        result = 0;

        console.log("i: " + i);
        console.log("aux: " + aux);
        console.log("bin1: " + bin1[i]);
        console.log("bin2: " + bin2[i]);
        
        if (bin1[i] == 0 && bin2[i] == 0) {
            console.log("0 0");
            if (aux == 0) {
                result = 0;
            } else {
                result = 1;
                aux = 0;
            }
            
        } else {
            if ((bin1[i] == 0 && bin2 [i] == 1) || (bin1[i] == 1 && bin2[i] == 0)) {    
                console.log("0 1" || "1 0");
                if (aux == 0) {
                    result = 1;
                } else {
                    result = 0;
                    aux = 1;
                }

            }

            if (bin1[i] == bin2[i]) {
                console.log("1 1");

                if (aux == 0) {
                    result = 0;
                    aux = 1;
                } else {
                    result = 1;
                    aux = 1;
                }
            }
        }
        

        console.log("Resultado: " + result);
        finalResult.unshift(result);
    }

    console.log("resultado final: " + finalResult);

    finalResult = finalResult.join('');
    console.log("resultado final: " + finalResult);
    
    document.getElementById("result").innerHTML = finalResult;
}