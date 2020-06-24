function cpfAuthenticator(cpf, repeat){
    let cpfNumbers = [];
    if(cpf.length === 11){
        cpfNumbers = cpf.split('');
    } else if(cpf.length === 14) {
        const numbersWdigits = cpf.split('');
        numbersWdigits.map(number => {
            if(number !== '-' && number !== '.'){
                cpfNumbers.push(number);
            }
        });
    } else {
        return {
            "error": "Tamanho do CPF não está correto, tente retirar os pontos e o hífen e verifique se há 11 números"
        }
    }

    if(repeat === false){
        let i = 0;
        cpfNumbers.map(number => {
            number === cpfNumbers[0] ? i++ : null;
        });
        if(i === 11){
            return false;
        }
    }
    
    const firstNumber = numberAuthenticator(cpfNumbers, 10, 9);
    const secondNumber = numberAuthenticator(cpfNumbers, 11, 10);
    if(firstNumber && secondNumber) {
        return true;
    } else {
        return false;
    }
}

function numberAuthenticator(cpf, i, n){
    let total = 0;

    cpf.map((number, k) => {
        if(k < n){
            total = total + (parseInt(number) * (i - k));
        }
    });
    const number = (total * 10) % 11;
    if(number === parseInt(cpf[n])){
        return true;
    } else {
        return false;
    }
}

module.exports = { cpfAuthenticator }