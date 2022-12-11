// mantiqiy operatorlar 
// mantiqiy operatorlar 3 ga bolinadi 
// && va operatori 
// || yoki operatori 
// ! emas operatori 

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false 
// agarda soat 9:00 dan otgan bolsa office ochiq aks holda yopiq shuni tenglamasini tuzing
// let hour = 9;
// let minute = 56;
// let isOfficeOpen = (hour >= 9 && minute  >=0)
// console.log(isOfficeOpen);
console.log(true || true ); //true
console.log(true || false); // true
console.log(false || false); //false
let memberOfMarket = 'realCustomer';
let result = memberOfMarket == 'realCustomer' ? 'chegirma bor' : 'chegirma yoq';
console.log(result);
let person = 70;
let resultOfExam = person >= 56 ? 'passed the exam' : 'not passed the exam dont be sad friend' ;
console.log(resultOfExam);

let gentlemenTalkGirlNumber = 15;
let resultOfMan = gentlemenTalkGirlNumber >= 10 ? 'he is a babnic' : 'he is a botanic';
console.log(resultOfMan);

let wealthOfMan = 1000000;
let retingOfMillioner = wealthOfMan ? 'millioner' : 'multi millioner your wealth havent reach million yet'
console.log(retingOfMillioner);
let hour = 9;
let minute = 32;
let isBankOpen = (hour >= 9 && minute >= 0);
console.log(isBankOpen); // this value is equal to false because this value is not equal to 9 the bank only open the 9
// bunda biz hozirgi vaqtni korsatish uchun ishlatamiz 
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
console.log('hour: ', currentHour, 'minute: ', currentMinute );

// || yoki operatori operantlardan hech bolmasa bittasi true bolsa u holda qiymat true boladi 
true || false // true 
true || true // true 
false || false // false 
//  endi emas operatori bilan tanishamiz 
isBankClose = !isBankOpen
console.log('ochiq: ', isBankOpen);
console.log('yopiq: ', isBankClose);

// yoki operatorini takrorlash hamda qoshimcha malumotlar 
false || 'salom'; // "salom"
false || 1 // 1
// agarda qiymatlar boolean korinishida bolmasa u holda truthy, falsy korinishida enter redaksiya qiladi
// falsy qiymatlar 
// undefined 
// "" bosh string 
// null
// 0
// false
// NaN not a number 
false || 2 || 4 ;
// buni natijasi qanday boladi desangiz redaktor doim chapdan ongga qarab oqib boradi shuning uchun ham result qilib qilib birinchi kelgan truthy qiymatni natija qilib oladi 

// bunga endi bitta misol keltirib otamiz 
// tassavvur qilamiz internet dokoni ustida ishlayapmiz foydalanuvchi 2 xil rangdagi shimdan bittasini tanlamoqchi 
let defaultColor = 'qora';
let userColor = 'siyoh rang';
let currentColor = userColor || defaultColor;
console.log(currentColor); // siyohrang chunki userColor defaultColordan oldinda joylashganligi uchun uni birinchi qiymat qilib olyapti 

// yana bir misol koramiz 
let royalPerson = {
    RoyalName: 'xayrullo',
    Age: 21,
    Job: 'programmist'
}
console.log('kasbi: ', royalPerson.Job || 'ishsiz');
isOpen = false;
console.log(!!isOpen);
let a;
let b = null;
let c = undefined;
let d = 4;
let e ='five';
let f = a || b || c || d || e ;
console.log(f);

// amaliy mashgulot 
let color1 = 'oq';
let color2 = 'qora';
let colorTemp = color1;
color1 = color2;
color2 = colorTemp;
console.log(color1);
console.log(color2);



console.log(color1);
console.log(color2);




