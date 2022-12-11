// solishtirish operatori 
// let x = 1;
// console.log(x > 0); true
// console.log(x >= 1); true
// console.log(x <= 0); false because x value is big from 0 again it is not equal 0
// endi equality(===) haqida gaplashamiz
// === tenglik belgisi 
// console.log(x === 1); true because 1 equal to 1
// !== teng emas belgisi 
// console.log(x !== 1); false;
// === strick equality yani bu kuchli tenglik bunda beradigan bolsangiz qatiy teng boladi agarda bu bilan tenglaydigan bolsangiz ham turi ham qiymati tenglashtiriladi 
// misol uchun 
// console.log('1' === 1);  false bittasi string type bolganligi uchun that is not equal simple 1
// == lose equality yani kuchsiz tenglik 
// console.log('1' == 1) true bu lose equality bolganligi uchun bular bir biriga teng boladi 

// x = 10;
// y = 5;
// console.log(x !== y); true 
x = 5;
// console.log(x !== '5'); true 
// console.log('2' == '12'); false chunki 2 12ga teng emas 

// ternary operatori buni 2 xil nomladi uchlik operatori va shartli operator deb ham ataladi 
// let points = 60;
// let result = points > 60 ? "O'tdi" : "O'tmadi";
// console.log('imtihon natijasi: ', result);
// ? savol belgisi 
// : aks holda belgisi 
// agarda siz dokon azosi bolsangiz u holda 20% chegirma bor, agarda dokon azosi bolmasangiz 5% chegirma beriladi shuni javaScriptda tuzing  
let memberCuctomerMarket = 'RealCustomer';
let notCustomerMarket = 'notCustomer';
let result = memberCuctomerMarket == 'RealCustomer' ? 'chegirma 20%' : 'chegirma 5%'
console.log('siz uchun imkoniyat: ', result);

// agarda u kelsa sizni sevadi aks holda sevmaydi 
let yourGirlfriend = 'kelsa';
let notlove = 'kelmasa'
let finalResult = yourGirlfriend == 'kelmasa' ? 'sevadi' : 'sevmaydi';
console.log('sevgilingiz sizni ', finalResult);