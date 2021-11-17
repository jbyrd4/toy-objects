let toyToFind = 6;
const toys = [
     {
        id: 1,
        name: "Rubber Duck",
        brand: "Ducky Toy Company",
        weight: 2.65,
        price: 4,
        inStock: true
    },

    {
        id: 2,
        name: "Monopoly",
        brand: "Hasboro",
        weight: 46.56,
        price: 17.99,
        inStock: true
    },

    {
        id: 3,
        name: "Wooden Yo Yo",
        brand: "Homemade",
        weight: 6,
        price: 9.50,
        inStock: false
    }
];

const scrabble = {
        id: 4,
        name: "Scrabble",
        brand: "Hasboro",
        weight: 40,
        price: 15,
        inStock: true
    };

const heMan = {
    id: 5,
    name: "He-Man",
    brand: "Toy Company",
    weight: 22,
    price: 20,
    inStock: false
};

toys.push(scrabble);
toys.push(heMan);


const gloomhaven = {
    name: 'Gloomhaven',
    brand: 'Cellophair Games',
    weight: 352,
    price: 150,
    inStock: false
}

const redDragonInn = {
    name: 'Red Dragon Inn',
    brand: 'Slug Fest Games',
    weight: 64,
    price: 50,
    inStock: true
}

const betrayal = {
    name: 'Betrayal at House on the Hill',
    brand: 'Wizards of the Coast',
    weight: 42,
    price: 45,
    inStock: true
}

const addToy = (newToy) => {
    const lastToy = toys.length -1
    const currentLastToy = toys[lastToy]
    const maxID = currentLastToy.id
    const newID = maxID + 1
    newToy.id = newID
    toys.push(newToy)
}

addToy(gloomhaven);
addToy(redDragonInn);
addToy(betrayal);

for (const toy of toys) {
    if (toy.id === toyToFind) {
    toy.price = toy.price * 1.05;
    console.log(`${toy.name} costs $${toy.price} and weighs ${toy.weight} oz.`)

    if (toy.inStock === true) {
        console.log(`This item is in stock.`)
    } else {
        console.log(`This item is out of stock.`);
    }
    }
    }

for (const toy of toys) {
    console.log(`${toy.name} costs $${toy.price}, weighs ${toy.weight} oz and published by ${toy.brand}.`)
    
}
