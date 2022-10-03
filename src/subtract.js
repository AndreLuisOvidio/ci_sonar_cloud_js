function subtract(a, b){
    return a - b;
}

function print(text){
    console.log(text);
}

function testeNumero(num){
    if(num < 10){
        console.log('menor que 10')
    }else if(num > 20 ){
        console.log('maior que 20')
    }else if(num > 15){
        console.log('maior que 15')
    }else if(num > 13){
        console.log('maior que 13')
    }
}

module.exports = subtract;
