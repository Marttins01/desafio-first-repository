function comparaNumeros(a,b){
    const primeiraFrase = criaPrimeiraFrase(a,b);
    const segundaFrase = criaSegundaFrase(a,b);
    return primeiraFrase +' e '+ segundaFrase;
}

function criaPrimeiraFrase(a,b){
    const igual = a===b;
    
   return igual?'o número ' + a +' e '+ b + ' são iguais!' :' O número '+a+ ' e '+b+ ' são diferentes' 
}

function criaSegundaFrase(a,b){
    let result10 = "menor";
    let result20 ="menor";
    

    const soma =a+b;

    const compara10 = soma>10;
    const compara20 = soma>20;
   
    if(compara10){
        result10= "maior";
       
    }
    if(compara20){
        result20 ="maior";
    }
    return "O resultado da soma foi "+soma+ " que é "+ result10+" que 10 e "+ result20+ " que 20";
}

console.log(comparaNumeros(18,1));
