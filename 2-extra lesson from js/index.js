//=========== operators operatorlar haqida malumot==================
//=============== Type conversion ============================
let a = 1;
let b = '2';
console.log(a+b);
// not a number bilan numberni qoshsak shu holat boladi 
console.log(a*b) // not a number bilan number kopaytirilsa number chiqadi
console.log(a-b); // bu ham kopaytirish amali bilan bir xil holat boladi
console.log(b/a); // bunda ham number chiqadi 

let str1 = 'webbrain';
let str2 = 'academy';
console.log(str1 + ' ' + str2);

// agarda string ichidagi number ustida amal bajarmoqchi bolsak u holda stringni name i oldidan + ishlatib ketamiz shundan stringdan chiqadi 
console.log(a + +b);
// avvalgi darslardan bilamiz harf qatnashgan value lar ustida arifmetik amallar bajaradigan bolsak u holda not a number yani NaN chiqadi 
let c = 1;
let g = '2'
console.log(+g); // ichida harf qatnashgan string ichidagi value ni biza number korinishiga olib otish uchun biza +g deb yoza olmaymiz chunki bu holda NaN chiqadi 

// endi biza buni NaN yoki NaN emasligini tekshiramiz 
console.log(isNaN(g)); //false chunki '2' chunki bu number
// agarda biza string ichidagi sonni numberga convert qiladigan bolsak u holda log ichida number() ochib ichida sting name berib ketsak bolaveradi 
console.log(Number(g));
console.log(typeof g) //string
// agarda bizga faqat sonni butun qismi kere boladigan bolsa u holda Number.parseInt(g) deb yozamiz
// kasr qismi kere boladigan bolsa parseFloat deb yozamiz 
// Number() ozida yozadigan bolsak u holda ikkalasini ham qollab quvvatlaydi 
let num1 = 1.65;
let num2 = 68.7854;
console.log(Number.parseInt(num1));
console.log(parseInt(num2))
console.log(parseFloat(num2))

//========= variabledan Boolean ga otish =============
// Boolean bilamiz 2 qiymat qabul qiladi true va false 
// true = !0, !undefined, !null ! bu belgi teng emas degani 
console.log(false == 0); // true  because false == 0
console.log(true === 0); // false beacuse true === !0
// taqqoslash ishatiladigan joylarda false orniga 0, true orniga 1 qoyib ketsak boladi 
console.log(true == 1) // true

console.log(false == null); //false;
console.log(false == undefined); //false;
console.log(null == undefined); //true

console.log(true == '1') //true;
console.log(true == 'a'); //false;
console.log(true == '2'); //false;
console.log(true == '0'); //false;

// arifmatik operatorlar 
// % qoldiqni topish funksiyasi 
console.log(8%3) // qoldiq 2
// ** darajaga oshirish 
console.log(11**2); //121

//=====increment va decrement elementi haqida malumot========== 

let k = 7;
// k++; 
console.log(k); // 8
console.log(k++); //7 chunki birinchi elon qiladi keyin qoshadi 
console.log(k);  // 8 
console.log(++k); // 9 bunda bittada qoshib ketadi
console.log(k) //9
console.log(k++); //9
console.log(k++); //10
// + da qanday action olib borgan bolsak - da buni aksi 


// ===========obvirations============ -----------qisqartirish----------
// bolish kopaytirish bu amallar bir xil 
let t = 50;

t = t + 10; //60
t += 10 //70
console.log(t); //70

// =================Comparision============== -----taqqoslash-------------
// comparision doim true and false ga taqaladi yani result Booleanga borib taqaladi 
// comparisionda 2 ta value bir biriga taqqoslanadi 
// < , >, ==, ===, <=,>=, ! shular bilan ozgaruvchilarni valuesini taqqoslaymiz 
// == weak type yani  kuchsiz turi bunda faqatgina ozgaruvchini qiymatini tengligini taqqoslaydi 
// === strong type bunda hamma tomonlama tenglaydi bunda turini ham hisobga oladi 
let age = 21
let ageX = '21';
console.log(age == ageX) // true //weak type 
console.log(age === ageX); // false  // strong type 
console.log(age >= ageX); //true 
console.log(age < ageX) //false 

let letter1 = 'A';
let letter2 = 'a';
console.log(letter1 > letter2); // false
console.log(letter1 < letter2) //true  
// nimaga bunda kichkina a katta a dan katta bolyatti desangiz komputerda ozi belgilab qoyilgan askey table bor klavituradagi shu askey kod hamma harflarni raqam bilan tartiblab qoygan shuning uchun ham kichkina a katta a dan katta bolyatti kichik a ning tartib raqami 97 katta A ning tartib raqami 41
// stringlarni taqqoslaganimizda ham shunaqa ong tomondan boshlab taqqoslab chiqadi 
console.log('str1' > 'str2'); // false chunki 2 birdan katta 
console.log('sutr1' < 'str2') //false chunki u tartib raqami t dan katta va askey kod hisoblanganda chap tomon askey kodi ong tomondan ancha katta 

// != bu teng emas belgisi 
// !== qatiy teng emas belgisi 
let number1 = 5;
let number2 = 5;
let check = true; 
console.log(number1 != number2); // false chunki bir biriga teng bular
console.log(number1 !== number2) // false 
console.log(!check) // false 

// logical operations 
// logical operationlarga or ( || ), and ( && ), not ( ! ), bular kiradi 
// or (||) 
// or da agarda 2 ta qiymatdan bittasi true boladigan bola u holsa qiymat true boladi 
// agarda oquv markazimda men boladigan bolsam u holda oquv markaz ochiq, admin bolsa ham ochiq agarda men yoq admin bolsa ham ochiq agar man ham admin ham oquv markazda yoq boladigan bolsa u holda oquv markaz yopiq 

let owner = true; 
let admin = true ;
// agarda true yoki false ga tenglanmagan bolsa unda bunday korinishda ham value berib tenglab ketsak boladi agarda tepadi ham true yoki false berilgan bolsa u holda console da siz yana true yokida false ga tenglab otib ketadigan bolsangiz u holda notogri boladi 
console.log(owner === true || admin === true )  // true yani oquv markaz ochiq
console.log(owner === false || admin === true ) // true admin bolsa ham ochiq 
console.log(owner === false || admin === false ) // false admin ham owner ham yoq bolsa u holda yopiq 
// tepadagini bunday korinishda yozsak ham boladi chunki yuqorida ular Boolean operatori bilan boglab ketganmiz 
console.log(owner || admin); // true
console.log(!owner || admin); //true 
console.log(!owner || !admin ) //false

// And && operator 
// and operatorida ikkalasi ham true qiymatiga ega bolsa u holda result true boladi agarda bittasi false bolsa u holda qiymat false boladi 
// misol qilib aytadigan bolsak chet el institutlarida kirishda faceID bilan IDcard tekshiriladi agarda faceID boru lekin IDcard yoq bolsa u holda siz institutda yoqsiz agarda ikkasi boladigan bolsagina siz intitutda bolasiz
let faceID =  true ;
let IDcard = true ;
console.log(IDcard && faceID) // true 
faceID = false;
console.log(faceID && IDcard); // false 

// homework 
// for assignment result 
let q = 2;
let w = 1 + (q += 2);
console.log(w)

// type conversion
console.log("" + 1 + 0) //10
console.log('0' + 20 + 10) // 02010
console.log('' - 10 + 0) //-10
console.log('' - 100 + 200) //100
console.log(true + false) //1
console.log(true + true) //2
console.log(6 / '3') //2
console.log(4 + 5 + 'px') //45px
console.log('$' + 4 + 5) //$45
console.log(' -9 ' + 4) // -9 4
console.log(' -9 ' - 4) // -13
console.log(" -20 " - 10) // -30
console.log(" - 20 " - 10) // NaN
console.log(null + 1) //1
console.log(undefined + 1) // NaN
console.log(" \t \n - 2") // -2
console.log( '\t + \n' ) // +

// comparision 
console.log("apple" > "pineapple") //false
console.log("2" > "12") // true
console.log("1" > "2") // false
console.log(null == undefined) //true
console.log(null === undefined) // false
console.log(null == "\n0\n") // false
console.log(null === +"\n0\n") // false
console.log(null == "null") //false
console.log(null === +"null") //false
console.log(null == +"null") //false
console.log(null == null) //true

console.log(true !== false); //true
console.log(true != false); //true
console.log(1 !== 0); // true 
console.log(1 != 0); // true 
console.log(1 !== '0') //true 
console.log(1 !== "1") //true
console.log(1 != '1') //false

// complex example 
console.log(1 !== 0 || !false); // true 
console.log(1 !== 0 && false)  // false 

console.log(1 !== '0' || (false && 'hey')) // true
console.log(1 !== 0 && false && 'hey') // false
console.log(1 !== 0 && true && 'hey') // hey
console.log('hey' || true) //hey
console.log('hey' && true) //true











