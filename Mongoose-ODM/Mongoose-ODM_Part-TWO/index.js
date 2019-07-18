const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/new_confusion'; //connects mongodb driver to mongoose
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({
        name: "UtahPizza",
        description: "test"
    }) // returns this object
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {description: 'Updated Test'}},{
                new: true
            })
            .exec();
        })
    .then((dish) => { // returns specified dish_id 
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m adding this comment',
            author: 'Jonah'
        });
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err)=> {
        console.log(err);
    })
});
