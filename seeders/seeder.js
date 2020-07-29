const db = require("../models");

const tacos = [
    {name:"Carne Asada", cal: "900", hasGuac: true},
    {name:"Shrimp Taco", cal: "180", hasGuac: true},
    {name:"Supreme Taco", cal: "1500", hasGuac: true},
    {name:"Carnitas Taco", cal: "600", hasGuac: true},
    {name:"Pollo Taco", cal: "300", hasGuac: true},
]

db.Taco.bulkCreate(tacos).then(()=> console.log("Tacos Seeded!"))