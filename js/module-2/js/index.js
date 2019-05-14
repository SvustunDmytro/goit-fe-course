let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Enter number!');
    if  (input === null) {
        break;
    } numbers.push(input);
}

if (numbers.length > 0) {
    for (number of numbers) {
        total = total + number;
    }
}

console.log(`Общая сумма чисел равна ${total}`);

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

while (attemptsLeft > 0) {
    let userPassword = prompt('Enter password!');
    if (passwords.includes(userPassword)) {
        alert('Добро пожаловать!');
        break;
    } else if (userPassword !== null && attemptsLeft > 0) {
        attemptsLeft -= 1;
        if (attemptsLeft === 0) {
            alert('У вас закончились попытки, аккаунт заблокирован!');
            break;
        } alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else if (userPassword === null) {
        break;
    }
}
