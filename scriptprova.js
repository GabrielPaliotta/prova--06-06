//exercicio2
let clique = document.getElementById("click");
let resultado = document.getElementById("resultado");

function Mostrar() {
    resultado.innerHTML = "Olá, " + click.value + " Tudo bem ?";
}
 
//exercicio3
var metros = document.getElementById("metros");
var ta = 100;
var sim = document.getElementById("sim");

function transformar()
{
    sim.innerHTML = "O valor inserido em metros equivale á " + parseInt(metros.value)  * ta + " centimetros"; 
}

//exercicio4
var numero = document.getElementById("numero");
var final = document.getElementById("kkk");

function Resultado(){
    final.innerHTML = `Antecessor   = ${parseFloat(numero.value) -1} --- Sucessor = ${parseFloat(numero.value) +1}`;
}
//exercicio 5 
var numero1 = document.getElementById('numer1');
var numero2 = document.getElementById('numer2');
var resultado6 = document.getElementById('resultado');

function compare() {
    var num1 = parseFloat(numer1.value);
    var num2 = parseFloat(numer2.value);

        if (num1 > num2) {
                resultado22.innerHTML = 'O maior número é: ' + num1 + '. O menor número é: ' + num2 + '.';
        } else if (num1 < num2) {
                resultado22.innerHTML = 'O maior número é: ' + num2 + '. O menor número é: ' + num1 + '.';
        } else {
                resultado22.innerHTML = 'Os números são iguais: ' + num1 + '.';
        }
}

//exercicio 6

let salario;
let aumento;

function calcularAumento() {
    salario = parseFloat(document.getElementById('salario').value);
        if (salario <= 1250) {
            aumento = salario * 0.15;
        } else {
            aumento = salario * 0.10;
        }
            document.getElementById('resultado29').innerHTML = 'O valor do aumento é: R$ ' + aumento.toFixed(2);
}


   
//exercicio 7 
console.log("Exercicio 7")
a = 1;

while (a <= 100) {
    console.log(a)
    a = a + 1;

}

//exercicio 8 
console.log("Exercicio 8")
b = 0;

while (b <= 50) {
    console.log(b)
    b = b + 5;
}

//exercicio 0
console.log("Exercicio 9")
c = 100;

while (c >= 0) {
    console.log(c)
    c = c - 10;
}
