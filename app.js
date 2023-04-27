const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customersDB', { useNewUrlParser: true, useUnifiedTopology: true });



const fruitSchema = new mongoose.Schema({
  name: String,
  score: Number,
  review: String
});

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  adress: String,
  phoneNumber: Number,
  favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great!"
});



const johnDoe = new Person ({
  firstName: "John",
  lastName: "Doe",
  adress: "Bauerstraße 30",
  phoneNumber: "015904123452",
  favouriteFruit: pineapple
});



const johnHoe = new Person ({
  firstName: "John",
  lastName: "Hoe",
  adress: "ASDF 30",
  phoneNumber: "015904145455445423452",
});
const johnBro = new Person ({
  firstName: "John",
  lastName: "Bro",
  adress: "asdgsddfdf 30",
  phoneNumber: "0159055664123452",
});


//Person.insertMany([johnDoe, johnHoe, johnBro]);

async function run() {
  try {
    // Insert the documents into the database
    //await Person.insertMany([johnDoe, johnHoe, johnBro]);
    //await pineapple.save();
    // Find all documents with the firstName "John"
    //const johns = await Person.find({firstName: "John"});
    //console.log(johns);
    //await johnDoe.save();
    //await Person.updateOne({_id: "6449728378487b0edea62480"},{firstName: "Jack"});
    //await Person.deleteOne({_id: "6449728378487b0edea62480"});

  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
}

run();