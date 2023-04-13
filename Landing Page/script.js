"use strict";

console.log("-----Zadanie 1-----");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
  console.log(`Silnia od ${i} wynosi: ${factorial}`);
}

console.log("-----Zadanie 1a-----");
let j = 1;
let factorial2 = 1;
while (j <= 10) {
  factorial2 *= j;
  console.log(`Silnia od ${j} wynosi: ${factorial2}`);
  j++;
}

console.log("-----Zadanie 2-----");
let a = 0,
  b = 1,
  sum = 0;
for (let n = 1; n <= 10; n++) {
  sum = a + b;
  a = b;
  b = sum;
  console.log(`Wyraz nr ${n} wynosi: ${sum}`);
}

console.log("-----Zadanie 3-----");
let evenArr = [];
a = 0;
b = 1;
sum = 0;
for (let n = 1; true; n++) {
  sum = a + b;
  a = b;
  b = sum;
  if (sum % 2 === 0) {
    evenArr.push(sum);

    if (evenArr.length === 10) {
      break;
    }
  }
}
console.log(
  `Pierwsze 10 parzystych wyrazów ciągu Fibonacciego to ${evenArr.join(", ")}.`
);

console.log("-----Zadanie 4-----");
let m = 0;
while (m <= 7) {
  switch (m) {
    case 1:
      console.log(m + ". Poniedziałek");
      break;
    case 2:
      console.log(m + ". Wtorek");
      break;
    case 3:
      console.log(m + ". Środa");
      break;
    case 4:
      console.log(m + ". Czwartek");
      break;
    case 5:
      console.log(m + ". Piątek");
      break;
    case 6:
      console.log(m + ". Sobota");
      break;
    case 7:
      console.log(m + ". Niedziela");
      break;
    default:
      console.log(`Dzień numer ${m} nie istnieje`);
      break;
  }
  m++;
}

console.log("-----Zadanie 5-----");
console.log(`1-5 = ${1 - 5}
2-4 = ${2 - 4}
3-3 = ${3 - 3}
3-2 = ${3 - 2}
3-1 = ${3 - 1} `);

console.log("-----Zadanie 6-----");
const dice1 = [1, 2, 3, 4, 5, 6];
const dice2 = [1, 2, 3, 4, 5, 6];
const res = [];

for (let number of dice1) {
  for (let i = 0; i <= dice2.length; i++) {
    if ((number + dice2[i]) % 2 === 0) {
      console.log(
        `Kostka 1: ${number} | Kostka 2: ${dice2[i]} | Suma oczek: ${
          number + dice2[i]
        }`
      );
    }
  }
}
console.log("-----Zadanie 7-----");
let biale;
let czerwone;
let str = "";
// Funkcja losująca:
function losowanie() {
  return Math.random() < 0.5 ? "B" : "C";
}
// 10 losowań:
for (let i = 1; i <= 10; i++) {
  console.log("Losowanie numer " + i);
  if (losowanie() === "B") {
    biale = 19;
    czerwone = 20;
    str = "biała";
    while (biale > 18 && czerwone > 0) {
      // losowanie aż trafi się znów biała albo gdy czerwone === 0
      if (losowanie() === "B") {
        str += "-biała";
        biale--;
      } else {
        str += "-czerwona";
        czerwone--;
      }
    }
    console.log(str);
  } else {
    console.log("czerwona");
  }
}
