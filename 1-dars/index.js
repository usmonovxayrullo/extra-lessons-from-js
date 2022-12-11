// bu jsdagi commentariyadir
console.log('Assalomu alaykum');
// js dagi ozgaruvchilar haqida malumot 
// ozgaruvchilarni tassavvur qilishimiz uchun biz honadagi qutilarni koz oldimizga keltiramiz bunda quti bu ozgaruvchi, qutiga solgan narsamiz bu ozgaruvchiga berilgan qiymat yani malumot qutiga yozilgan yozuv bu ozgaruvchiga berilgan nom 
let name;
console.log(name);
// ozgaruvchilarni qiymati elon qilinmagan bolsa u holda undefined boladi 
// bunda ozgaruvchini qiymati bilan berilgan holati 
let FirstName = 'xayrullo';
console.log(FirstName);
// ozgaruvchilarga nom berishdagi qoidalar hamda oltin qoidalar
// 1. ozgaruvchilarni nomi kalit soz bolmasligi kerak 
// let, if, if else, ... 
// 2. ozgaruvchini nomi raqam bilan boshlanmasligi kerak 
// 1name, 78firstName 
// 3. ozgaruvchilar nomida probel bolmasligi kerak 
// first name bu holat xato 
// 4. ozgaruvchilar nomi CamelCase qoidasiga asosan berilishi kerak 
// FistName, SecondProject shu holatda beriladi 2 ta worddan tashkil topgan bolsa 
// 5. ozgaruvchilar nomi mazmunli bolishi kerak 
// nimadir yokida allambalo deb nom berish xato huddi farzandimizga oylab ism berganizdek ozgaruvchiga ham shunday nom berish kereki dasturchi bitta korganda uni nima ekanligini tushunsin xato ism berganimizda dasturchi ancha qiynaladi uni tushunmay 
// ozgarmas ozgaruvchini elon qilishimiz const dan foydalanamiz const faqat bitta keladigan ozgarmas narsalarga nom berishimiz uchun kerak boladi 
// misol uchun
const DateOfBirth = 9;
console.log(DateOfBirth);
const pi = 3.14
console.log(pi);
// agarda biz constni qiymatimizni xato beradigan bolsak console da error beradi 
// pi = 4 bu holat error 

// ozgaruvchilarni turlari 
// jsda ozgaruvchilar 2 ga bolinadi 
// 1. primitiv/value turi 
// 2. reference turi 

// primitiv turlari quyidagilarga bolinadi 
// 1. string 
// 2. number 
// 3. boolean 
// 4. undefined 
// 5. null

let PersonName = 'ibrohim'; //String 
let age = 13; //number 
let isMarried = false; //boolean
// Boolean turdagi ozgaruvchi true or false qiymatiga ega  boladi 
let lastName; //undefined 
let lastNameofPerson = undefined //undefined
let selectColor = null //null
selectColor = 'green';
selectColor = "blue";
// buni qanday holatlarda ishlatamiz desangiz hali ozgaruvchi biron bir narsani tanlamoqchiyu lekin hali tanlamagan bolsa u holda null ishlatiladi 
// dasturlash olamida dasturlash tillari 2 turga bolinadi 
// 1. static typing (strong typing)
// 2. Dynamic typing (weak typing) 
// js 2-turga kiradi yani dynamic typing 
// consolega typeof deb yozib ozgaruvchi nomi beriladigan bolsa u holda qanday ozgaruvchi turiga tegishli ekanligini korsatadi 
// Ctrl+L bilan console ni tozalab tashlasa boladi 
// Reference turlar ham 3ga bolinadi 
// 1. object
// 2. array 
// 3. function 
// bugun objectlar haqida organamiz
// objectni elon qilish uchun bitta shaxs uchun tegishli bolgan malumotlarni bitta ozgaruvchiga jamlash bunda qiymatlari key value case xossasiga asosan beriladi

let group = {
    groupName: 'Dream',
    groupAge: 13
}
console.log(group);
// objectda yana bir xossa bor uni dote notation deb ataladi 
group.groupAge = 22;
group.groupName = 'sodiq'
console.log(group.groupAge);
// yana bir turi bor u [] qavslar bilan berish usuli 
group['age'] = 15
console.log(group['age']);
// bularni hammasini korib otdik endi bizda savol tugiladi bulardan qaysi birini ishlatgan maqul objectni xossalari bilan ishlashda dote notationdan foydalangan yaxshiroq chunki unda ishlash ancha tezroq tushunishga ham yaxshiroq 






