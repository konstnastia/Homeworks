//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (УТОЧНИТЬ НАСЧЕТ ПРОСТЫХ ЧИСЕЛ)


label: for (let b = 2; b <= 100; b++) { 
  for (let c = 2; c < b; c++) { 
    if (b % c == 0) continue label; 
  }
  console.log(b); 
} 



// 2. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 

for (let i = 0; i < 10; i++) console.log(i); 


/*3. Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx  */

let str = "x";
while (str.length < 20) {    
  console.log(str);    
  str += "x";
} 