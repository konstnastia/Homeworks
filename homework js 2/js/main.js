// 1. Браузер будет загадывать случайное четырехзначное число, а мы будем отгадывать. Попытки отгадать число будут идти через диалоговое окно — prompt. Браузер будет сообщать в ответ, больше или меньше загаданного наш ответ.
function getUserNumber() {
    let userNumber = +prompt ('Я загадал четырехзначное число. Попробуй его угадать.');
    if (!userNumber) {
        console.log('Введите четырехзначное число');
    } else if (userNumber < 1000) {
        console.log('Введите четырехзначное число');
    } else (userNumber > 9999) 
        console.log('Введите четырехзначное число');
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return randomNumber;
}

let userNumber = getUserNumber();
let randomNumber = getRandomNumber();

function guessNumber(userNumber, randomNumber) {
    if (userNumber === randomNumber) {
        console.log('Угадал!');
    } else if (userNumber > randomNumber) {
        console.log('Меньше');
    } else (userNumber > randomNumber)
        console.log('Больше');
}

guessNumber(userNumber, randomNumber); 

/*2. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:если a и b положительные, вывести их разность; если а и b отрицательные, вывести их произведение;если а и b разных знаков, вывести их сумму; Ноль можно считать положительным числом
let a = 1;
let b = 2;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else  (a >= 0 && b < 0 || a < 0 && b >= 0) 
    console.log(a + b);  */

/*3. Присвоить переменной а значение в промежутке [0..6]. С помощью оператора switch организовать вывод чисел от 0 до 6.

a = 6;

switch (a) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
} */

/*4. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами

function addition(arg1, arg2) {
	return arg1 + arg2;
}

function subtraction(arg1, arg2) {
	return arg1 - arg2;
}

function multiplication(arg1, arg2) {
	return arg1 * arg2;
}

function division(arg1, arg2) {
	return arg1 * arg2;
} */

/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций(использовать функции из пункта 4) и вернуть полученное значение (применить switch).

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            console.log (arg1 + arg2);
            break;
        case '-':
            console.log (arg1 - arg2);
            break;
        case '*':
            console.log (arg1 * arg2);
            break;
        case '/':
            console.log (arg1 / arg2);
            break;
    }
} */

/* 6. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.


function power(val, pow)  {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);  
  }
}

// короче:
function power(val, pow) {
  return (pow == 1) ? val : (val * power(val, pow - 1));
} */

