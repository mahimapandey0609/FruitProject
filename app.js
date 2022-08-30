const mongoose =require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB" ,{useNewUrlParser : true});
const fruitSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
      },
    rating : {
        type : Number,
        min : 1,
         max : 10
     },
    review : String
});

const Fruit= mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name :"Lichi",
 rating : 4,
 reviews :"Very Tasty"
});

// const kiwi = new Fruit({
//     name :"kiwi",
//  rating : 9,
// reviews :"I haven`t eaten yet"
// });

// const banana = new Fruit({
//     name :"Banana",
//  rating : 8,
// reviews :"Gives energy"
// });
// const orange = new Fruit({
//     name :"Orange",
//  rating : 6,
// reviews :"I like its juice"
// });

// Fruit.insertMany([kiwi, banana, orange,lichi] , function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved the data");
//     }
// });

const pineapple = new Fruit({
    name :"pineapple",
 rating : 4,
 reviews :"Very Tasty"
});

// pineapple.save();

Fruit.find(function(err , fruits){
    if(err){
        console.log(err);
    
    }else{
       
        
        fruits.forEach(element => {
            console.log(element.name);   
        });
       
    }
});

// Fruit.updateMany({name : "Apple"}, {name: "guava"}, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated");
//     }
// });

// Fruit.deleteMany({name: "lichi"}, function(err){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Record deleted successfully");
//     }
// });
// fruit.save();  // Its saves the fruit documents into a fruit collection

// mongoose.connect("mongodb://localhost:27017/peopleDB" ,{useNewUrlParser : true});


const peopleSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favfruit : fruitSchema
    
});


const People= mongoose.model("People", peopleSchema);


const people = new People({
    name :"Amy",
  age : 12,
  favfruit: pineapple
});
people.save();







