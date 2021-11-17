let toyToFind = 5;
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
        brand: "hasboro",
        weight: 46.56,
        price: 17.99,
        inStock: true
    },

    {
        id: 3,
        name: "Wooden Yo Yo",
        brand: "homemade",
        weight: 6,
        price: 9.50,
        inStock: false
    }
];

const scrabble = {
        id: 4,
        name: "Scrabble",
        brand: "hasboro",
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