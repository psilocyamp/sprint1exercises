// //1

// // function printMessage( message ) {

// //     console.log( message )

// // }

// const printMessage = (message) => console.log(message);

// //2

// // function createMultplication (number1, number2) {

// //     let result = number1 * number2

// //     return result

// // }

// const createMultplication = (number1, number2) => number1 * number2;

// //3

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const nuevoArray = array.map((number) => createMultplication(number, 2));
// console.log(nuevoArray);

// //4

// const cervezasConMasAlcohol = (array) => array.sort((a, b) => b.abv - a.abv).slice(0, 10) //argumentos que se pasan para poder comparar personalizadamente las cerve

// console.log(cervezasConMasAlcohol(beers))

//5

// const cervezasMenosAmargas = (array) => {
//     const top10 =array
//     .filter (beers => typeof beers.ibu === 'number')
//     .sort((a, b) => a.ibu - b.ibu).slice(0, 10) //argumentos que se pasan para poder comparar personalizadamente las cerve
//     .slice(0, 10)

//     return top10
// }

//   console.log(cervezasMenosAmargas(beers))

//6

// const devolverNombre= (array, name) => {
//     const beer = array.find(beer => beer.name === name)
//     return beer || null
// }
//  const nombreEncontrar= "Trashy Blonde"
//  const encontrarCerveza= devolverNombre(beers, nombreEncontrar)
//  console.log(encontrarCerveza)

//7

// const ibuu = (beers, value)=> {
//     const encontrarCerveza = beers.find(beer => beer.ibu === value)

// if (encontrarCerveza) {
//     return encontrarCerveza
// } else {
//     return null
// }
// }

// console.log(ibuu(beers, 50));
// console.log(ibuu(beers, 35));

//8

// const findBeerIndexByName = (beers, name) => {
//     const index = beers.findIndex (beer => beer.name === name)

// if (index !== -1) {
//     return index
// }else {
//     console.log(`${name} no existe.`)
// }}

// console.log(findBeerIndexByName(beers, 'Avery Brown Dredge'))
// console.log(findBeerIndexByName(beers, 'Porter'))

//9

// const filterBeersByABV = (beers, alcoholValue)  => {
//     const allBears =beers.flat(subArray =>subArray)   //para tener un unico array con todas las birras

//     const filteredBeers = allBears.filter (beer => beer.abv <= alcoholValue)  //para filtrar las birras que tengan abv menor o igual a 5

// const formattedBeers= filteredBeers.map (beer => ({  //organizamos como va a ser el objeto que devuelva
//     name: beer.name,
//     abv: beer.abv,
//     ibu: beer.ibu
// } ))
// return formattedBeers          //// devolvemos el array con las cervezas filtradas y formateadas

// }
// console.log(filterBeersByABV(beers, 5));

//10

// const orederBeers = (arraybeers, property, boolean) => {

//     const order = arraybeers
//       .filter((beer) => beer[property])
//       .toSorted((a, b) => {
//         if (a[property] < b[property]) {
//           return -1
//         } else if (a[property] > b[property]) {
//           return 1
//         }
//         return 0
//       })

//     if (boolean) {
//       return order.slice(0, 10)
//     }
//     return order.reverse().slice(0, 10)
//   }

//   console.log(orederBeers(beers, 'abv', true))
//   console.log(orederBeers(beers, 'abv', false))



//11

const renderBeerTable= (beers, elementID) => {

    const container = document.getElementById(elementID)

    const table = document.createElement('table')
table.className= 'min-w-full bg-white border border-gray-200'


const headerRow= document.createElement('tr')
const headers = ['Name','ABV', 'IBU']

headers.forEach(headerText) => {
    const header = document.createElement('th')
    header.textContent = headerText
    header.className = 'py-2 px-4 border-b border-gray-200 bg-gray-100'
    headerRow.appendChild(header)
}
) table.appendChild(headerRow)



//crear filas
beers.forEach(beer => {
    const row = document.createElement('tr');
    row.className = 'hover:bg-gray-50';

    const nameCell = document.createElement('td');
    nameCell.textContent = beer.name;
    nameCell.className = 'py-2 px-4 border-b border-gray-200';
    row.appendChild(nameCell);

    const abvCell = document.createElement('td');
    abvCell.textContent = beer.abv;
    abvCell.className = 'py-2 px-4 border-b border-gray-200';
    row.appendChild(abvCell);

    const ibuCell = document.createElement('td');
    ibuCell.textContent = beer.ibu;
    ibuCell.className = 'py-2 px-4 border-b border-gray-200';
    row.appendChild(ibuCell);

    table.appendChild(row);
});

// Limpiar el contenedor y agregar la tabla
container.innerHTML = '';
container.appendChild(table);
};

// Llamar a la función para renderizar la tabla
renderBeerTable(beers, 'beer-table-container')
