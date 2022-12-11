// array yani massivlar haqida malumot
// massivlar [] qavs bilan yaratiladi  
let selectedColors = ['oq', 'yashil' ];
console.log(selectedColors);
// arraylarni index raqami doim 0 dan boshlanadi consoleda buni guvohi bolishimiz mumkin buni uzunligini bilishimiz uchun      console.log(selectedColor.length); ni kiritamiz 
selectedColors[3] = "ko'k"
console.log(selectedColors[3]);

// arifmetik operatorlar 
// operatorlar quyidagi turlarga bolinadi 
// 1. arifmetik
// 2. tayinlov 
// 3. solishtiruv
// 4. mantiqiy
// 5. bitwise // yani bitma bit operatorlar 

// bugun arifmetik operatorlarni organamiz
let x = 8;
let y = 4;
let z = 7

console.log(x + y); // buni expression deb ataladi, expression bu qiymatni hosil qiluvchi hisoblanadi.
// * kopaytirish
// / bolish 
// + qoshuv 
// - ayiruv
// ** darajaga kotarish 
// % qoldiq 
console.log(x * y);
console.log(x / y);
console.log(x - y);
console.log(x ** y);
console.log(z % y);

// yana incriement(++) va dicrementlar(--) ham mavjud
console.log(++x); //bunda bittada bir qoshib beradi
console.log(x++); //bunda oldin yodda saqlab keyin kotarib beradi 
console.log(x); 
console.log(++x);
console.log(++x);
console.log(++x);
// dicrement elementga misol 
console.log(--x);
console.log(x--);
console.log(x);
// tayinlov operatorlari 
// x++ bu degani x = x + 1 degani 
// x-- bu degani x = x - 1
// agarda biz 3 yokida undan katta bolgan sonni qoshmoqchi bolsak u holda 
// x  = x + 3
x += 3
console.log(x);
// agarda barobardan oldin arifmetik amallarni qoyish arifmetik amallar ustida ishlashning qisqa usuli 
// -=
// /=
// *=
// **=
x **= 3
console.log(x);







