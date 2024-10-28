/*
Kontrola DIČ
Všimněte si, že knihovna validator.js v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

CZ123456789
CZ1234567890
Postupujte dle následujících kroků:

Vytvořte prázdnou stránku s JavaScriptem a knihovnou validator.js.
Vytvořte funkci isDIC s jedním parametrem inputStr, což bude řetězec, který chceme zkontrolovat.
Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce false. Tím naše funkce končí. Všimněte si, že takto používáme vzor časný návrat.
Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém případě opět vraťte false.
Dále si ve funkce do proměnné prefix uložte první dva znaky vstupního řetězce.
Pomocí podmínky zkontrolujte, že proměnná prefix obsahuje přesně znaky CZ. Pokud ne, ihned vraťte false.
Do promměné digits si uložte část vstupního řetězce od třetího znaku dále.
Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí false, ihned také vraťte false.
Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
Vyzoušejte svoji funkci na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.
*/

const isDIC = (inputStr) => {
  if (inputStr.length < 11 || inputStr.length > 12) {
    return false;
  }
  const prefix = inputStr.slice(0, 2);

  if (prefix !== "CZ") {
    return false;
  }

  const digits = inputStr.slice(2);
  if (!validator.isInt(digits)) {
    return false;
  }

  return true;
};

/*
Příklady platných DIČ:
CZ123456789
CZ1234567890

*/

console.log(isDIC("CZ123456789"));
console.log(isDIC("CZ1234567890"));

/*
Příklady neplatných DIČ:
123
ABC
1234567890
001234567890
1234567890CZ
CZ12345678901
CZ12345678
CZA12345678
*/
console.log(isDIC("123"));
console.log(isDIC("ABC"));
console.log(isDIC("1234567890"));
console.log(isDIC("001234567890"));
console.log(isDIC("1234567890CZ"));
console.log(isDIC("CZ12345678901"));
console.log(isDIC("CZ12345678"));
console.log(isDIC("CZA12345678"));
