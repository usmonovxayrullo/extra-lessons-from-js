// if else haqida malumot
// conditional operators = true, false; 

// if (conditional operator) {
//     agarda conditional operator true boladigan bolsa u holda bu yerdagi kod ishlaydi agarda false boladigan bolsa keyingi operatorga otkazib yuboradi 
// }
// false == null, 0 , undefined;
// true == 1, true 
// real project ustida ishlaymiz 
// real project ustida ishlab koramiz 
// agarda siz bironta website ga kiradigan bolsangiz u holda yoshingiz nechida deb soraydi shuni hozi biza qilib koramiz 

// let age = prompt('yoshingizni kiriting');
// if (age > 18 ) {
//     alert('hush kelibsiz bro!') 
// }
// else {
//     alert('ukatoy siz hali yoshsiz')
// }

// let temp = undefined; // qor, yomgir, issiq, vhkz
// if (temp) {
//     console.log('havo issiq'); //false 
// }
// if (true) {
//     console.log('havo sovuq'); //true
// }

// let temp = 'qor';
// if (temp === 'issiq') {
//     console.log('havo issiq, yengil kiyinib oling')
// }
// else if (temp === 'sovuq') {
//     console.log('havo sovuq, qalin kiyinib oling')
// }
// else if (temp === 'yomg`ir') {
//     console.log('yomg`irli, soyabon olvoling')
// }
// else if (temp === 'qor') {
//     console.log('qorli, qalin shapka va kurtka kiyish esdan chiqmasin')
// }
// else {
//     console.log('noma`lum ob havo')
// }

// tempurature = 0; tempurature > 0 && tempurature < 10, tempurature > 10 && tempurature < 15, tempurature > 15 && tempurature < 20; 
// shu narsani bilib olish kereki doimo value beryotganda kichikidan boshab value berib ketishimiz kere chunki agarda katta qiymat berib qoyadigan bolsak boshiga birinchi ushani qiymatini qabul qiladi va qolganini igrone qilib yuboradi 
let tempurature = -200;
if (tempurature <= 0) {
    console.log('havo o`ta sovuq')
}
else if (tempurature > 0 && tempurature <= 10) {
    console.log('havo sovuq');
}
else if (tempurature > 10 && tempurature <= 15) {
    console.log('havo iliq');
}
else if (tempurature > 15 && tempurature <= 20) {
    console.log('havo issiq');
}
else {
    console.log('o`ta issiq');
}
// bundanda optimal yoli bor u bitta casega 2 ta shart berib otib ketish kere misol uchun
// a > 5 && a <= 15; shu kabi 
// if ni sintaksisi
if ('condition') {'code'}
else if ('condition') {'code'}
else {'code'} //nimaga condition yoq desangiz bunda yuqoridagilar ishlamasa bu kod ishga tushadi 
// agarda biz bitta line ga sigadigan code yozadigan bolsak u holda {} ni qoyish shartmas 
// shuni bilib oling code bir qator emas balki bir necha qatordan tashkil topgan bolishi ham mumkin

// ========ternary operators | conditional operators | mark operator ======= ---mano bir xil---------
// if else bilan bir xil shunchaki soddaroq va 2 ta ozgaruvchi ortasidagi shartni bajarish uchun ishlatiladi 
// recommend true yokida false uchun ishlatish maslahat beriladi boshqa hollarda if else ishlatgan maqul 
// ternary operatorning sintaksisi||    ==== ? : ======
// bunda ? belgi bu if : 2 nuqta esa bu else 
let con1 = 10;
con1 < 0 ? console.log('havo sovuq') : console.log('havo iliq') // bu nima degani con1 0 dan kichik bolsa havo sovuq ask holda havo iliq bolsin 
// ternaryni multi state holatida ishlatish 
let con2 = 5;
con2 < 0 ? console.log('havo juda sovuq')
: con2 < 10
? console.log('havo sovuq')
: con2 < 20 
? console.log('havo iliq')
:console.log('havo juda issiq');

// agarda siz sessiyani hammasidan maksimum ball toplagan bolsangiz u holsa siz taqdirlanasiz unday bolmasa hech nima yoq 
let studentScore = 100;
let result = (studentScore > 92 && 100 >= studentScore) ? 'sizga pul yutugi bor' : 'afsuski sizga hech nima yoq koproq harakat qil student'
console.log(result) // sizga pul yutugi bor 
let examScore = 0;
let examResult = examScore < 60 ?  'afsuski siz imtixondan otolmadingiz' : examScore >= 60 && examScore < 90 ? 'afsuski kirish imtixoniga ozgina yetmadi superkontraktga harakat qilishingiz mumkin' : examScore >= 90 && examScore < 170 ? 'kontrakt asosida oqishga qabul qilindingiz' : 'grand asosida oqishga qabul qilindingiz'
console.log(examResult)

// nullish ?? operators ====> null with undefined
// qachon malumot yetib kelmaydi qachonki malumot null bn undefined bolsa 
console.log(1 || 2) // 1
console.log(false || 2) // 2
console.log(5 || false) // 5
console.log(1 || true ) //1 
console.log(2 || true) // 2
console.log(5 || true ) // 5
// xulosa qilish mumkinki number bian Boolean or operatorida tekshirilganda doim number chiqarkan 
// Nullish 
console.log(NaN || 1); //1
console.log(NaN ?? 1); //NaN
console.log(false || 1); // 1
console.log(false ?? 1); false
// nullish faqatgina nulll bilan undefinedni false deb qabul qiladi
// || orda esa undefined, null, NaN, 0 , false ni false dab qabul qiladi

console.log(null || 1); //1
console.log(null ?? 1); //1
console.log(undefined || 1); // 1
console.log(undefined ?? 1); //1
//  ===========home work ======================
