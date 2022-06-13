function digaSePalindromo(string){
    if(!string){
        return "String Vazia!";
    }
    //pega o tamanho da string e divide por2 para fazer a comparação da primeira posicao e a ultima ate se encontrarem 
    for(let i=0; i<string.length/2;i++){
       // colaca-se o -1 para igualar o tamanho com o indice, já que  o indice inicia em 0 e o tamanho em 1 e -i para contar com o laço for para cada letra!
        if(string[i]!==string[string.length-1-i]){
            return false;
        }
       
    }
    return true;
    
}
console.log(digaSePalindromo("ana"));