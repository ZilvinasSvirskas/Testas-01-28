//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. 

const a = 7;
const b = 5;

if (a >= b) {
    console.log('daugiau arba lygu');
} else {
    console.log('nei daugiau, nei lygu -> maziau');
}

//Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

const pazymiai = [1,2,3,4,5,6,7,8,9,10];
console.log(pazymiai);

//3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

const sarasas = [0,2,4,6,8,10];
console.log(sarasas[0],sarasas[1],sarasas[2],sarasas[3],sarasas[4],sarasas[5]);

//Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

const nuo1 = 1
const iki1 = 10

for (let i = nuo1; i <= iki1; i++)

console.log(i)

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lyginesuma(skaicius1,skaicius2) {
    return skaicius1 + skaicius2
}
    const x = 100
    const y = 1000

    const rezultatas = lyginesuma(x,y)
    console.log(x,y,'=',rezultatas)

   // 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
        //skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function pirminisSkaicius(n) {
    console.log(n);
if (typeof n !== 'number') {
return 'ERROR';
    }
    const numerAsSring = n/n || n/1;
    let size = numerAsSring.length;
if (n/1,n%1){
    size--;
}

return size;
}

10.

function telefononumeris (37068729039) {

}