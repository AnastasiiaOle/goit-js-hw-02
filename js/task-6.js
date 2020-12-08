
let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt("Введите число");
    if (input === null){
        for(let i = 0; i < input; i += 1) {
            total += input[i];
        }
        console.log(`Общая сумма чисел равна ${total}`);
        break;
    }
    
    input = Number(input)
    total += input;
    numbers.push(`${input}`);
    numbers.join(`,`);
    console.log(numbers);
} 
