let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Enter number!');
    if  (input === null) {
        break;
    } else if (Number.isNaN(Number(input))) {
        continue;
    } else {
        numbers.push(Number(input));
    }
}

if (numbers.length) {
    for (number of numbers) {
        total = total + number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft) {
    let userPassword = prompt('Enter password!');
    if (userPassword === null) {
        break;
    } if (passwords.includes(userPassword)) {
        alert('Добро пожаловать!');
        break;
    } if (userPassword !== null && attemptsLeft) {
        attemptsLeft -= 1;
        if (!attemptsLeft) {
            alert('У вас закончились попытки, аккаунт заблокирован!');
            break;
        } alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    }
}
