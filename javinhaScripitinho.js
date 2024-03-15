let vetor = [],dobrado = [];
function Continha(sinal)
{
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    
    switch(sinal)
    {
        case'+':
            document.getElementById('resultado').innerHTML = n1+n2;
            break;
        case'-':
            document.getElementById('resultado').innerHTML = n1-n2;
            break;
        case'*':
            document.getElementById('resultado').innerHTML = n1*n2;
            break;
        case'/':
            document.getElementById('resultado').innerHTML = n1/n2;
            break;
        default:
            document.getElementById('resultado').innerHTML = 'Sinal não reconhecido!';
            break;
    }
}
function Vetor()
{
    document.getElementById('vetor').innerHTML = ' ';
    vetor.push(parseFloat(document.getElementById('resultado').innerHTML));
    document.getElementById('vetor').innerHTML = '[' + vetor + ']';
}

function Dobrar()
{
    document.getElementById('dobrado').innerHTML = ' ';
    dobrado = vetor.map(num => num*2);
    document.getElementById('dobrado').innerHTML = '[' + dobrado + ']';
}

let pessoa = {
    nome: 'Rafael',
    idade: 25,
    homem: true
}
