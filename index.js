// Code your solutions in this filea

const namesArr = ['Guadalupe', 'Ollie', 'Aki']

function writeCards(names) {
    const cardNames = []
    let i = 0
    while (i < names.length) {
       cardNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
       i++
    }
    return cardNames;
}

writeCards(namesArr);




// number = 
// function countDown(number){
//     let i = number
//     while (i > 0) {
//     console.log(i)
//     i--
//     }
// countDown(number)
// }

number = 10
function countDown(number){
    let i = number;
     while (i + 1 > 0) {
    console.log(i);
    i--;
  }
}







