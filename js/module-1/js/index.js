const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
let userPassword = prompt('Enter the password');

if (userPassword === null) {
    message = 'Отменено пользователем';
} else if (userPassword == ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
alert(message);



let credits = 23580;
let pricePerDroid = 3000;
let howMuchDoYouWantToBuy = prompt('Какое количество желаете приобрести?');
let totalPrice;

if (howMuchDoYouWantToBuy === null) {
    console.log('Отменено пользователем');
} else if (howMuchDoYouWantToBuy != null) {
    totalPrice = Number(howMuchDoYouWantToBuy) * pricePerDroid;
    if(totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
        alert('Недостаточно средств на счету!');
    } else {
        credits = Number(credits) - totalPrice;
        console.log(`Вы купили ${howMuchDoYouWantToBuy} дроидов, на счету осталось ${credits} кредитов`);
        alert(`Вы купили ${howMuchDoYouWantToBuy} дроидов, на счету осталось ${credits} кредитов`);
    }
}

let userCounty = prompt('Enter your Country');
let chinaPrice = 100;
let southAmericaPrice = 250;
let australiaPrice = 170;
let indiaPrice = 80;
let jamaicaPrice = 120;
let title;

switch (userCounty.toLowerCase()) {
    case 'китай': 
        title = `Доставка в ${userCounty} будет стоить ${chinaPrice} кредитов`;
        break;
    case 'южная америка': 
        title = `Доставка в ${userCounty} будет стоить ${southAmericaPrice} кредитов`;
        break;
    case 'австралия':
        title = `Доставка в ${userCounty} будет стоить ${australiaPrice} кредитов`;
        break;
    case 'индия':
        title = `Доставка в ${userCounty} будет стоить ${indiaPrice} кредитов`;
        break;
    case 'ямайка':
        title = `Доставка в ${userCounty} будет стоить ${jamaicaPrice} кредитов`;
        break;
    default: 
        title = 'В вашей стране доставка не доступна';
        break;
}
alert(title);