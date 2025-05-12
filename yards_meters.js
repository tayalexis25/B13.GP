function convertToMeters(yards){
    return yards * 0.9144;
}

function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

    if(numYards === 1760) {
        message = 'Thats as long as a mile!';
    } else if(numYards === 100) {
        message = 'Thats as long as a football field!';
    } else if(numYards === 26) {
        message = 'Thats as long as a tennis court!';
    } else if(numYards === 1) {
        message = 'Thats as long as a washing machine!';
    }
    return `${yards} yards is ${ meters} meters. ${message}`;
}

let inputYards = prompt('Enter a number, we will convert that number from yards to meters!');
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters)
console.log(output);
