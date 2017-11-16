//array destructuring
//const address = ['Mariza 11', 'Asenovgrad', 'Bulgaria', '4230'];
//const [, city1, country = 'Unknown'] = address;
//console.log(`You are in ${city1} ${country}`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`Medium ${itemName} costs ${medium}`);

//object destructuring
const person = {
  name: "Pesho",
  age: 20,
  location: {
    city: "Plovdiv",
    temp: 15
  }
};


const {name: firstName = 'Anonimous', age} = person;
const {city, temp: temperature} = person.location;

//console.log(`${firstName} is ${age}.`)
if(city && temperature){
  //console.log(`It is ${temperature} in ${city}`)
}

const books = {
  title: "Stand",
  author: "Stephen King",
  publisher: {
    name: "Penguin"
  }
};

const {name: publisherName = 'Self-Published'} = books.publisher;

//console.log(`${publisherName}`);