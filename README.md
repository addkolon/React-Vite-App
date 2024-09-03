# React-Vite-App

## Components
I React när man skapar kompontenter så kan man med fördel länka in en specifik css för den komponenten. Detta gör att **inte all** CSS laddas in hela tiden utan enbart den som är Global och för de komponenter som visas.

*Mall för att skapa en komponent*
- Varje komponent skall ligga i sin egna mapp, den överordnade mappen heta Components
- I den mappen skall det finnas minst en jsx-fil och en css-fil (Namnge dem samma namn **Exempel:** *Cards.jsx* & *Cards.css*)
- Länka in css-filen i jsx-filen. **Exempel:** *'import './Cards.css'*

## Component eller Global CSS
Tänk på vilken css som är komponent specifik och vilken som bäst ligger globalt. Den generella tanken är, skriver jag samma css om och om igen, så kanske den kan läggas globalt som en hjälpklass istället.