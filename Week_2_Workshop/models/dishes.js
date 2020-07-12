const mongoose = require('mongoose'); // Import mongoose middleware
require('mongoose-currency').loadType(mongoose); // Defines a Schema type for middleware Currency
var Currency = mongoose.Types.Currency; // Using that Type for a specified Key/value pair type.


const Schema = mongoose.Schema; //Defining Schema to use Schema object
//dishes.js is the document, everything in it are the sub-documents

// Creating a Schema Object for commentSchema
const commentSchema = new Schema({
    // What is inside here?
    // JSON object
    rating: {
        type: Number, // Declaring that.... value type is.. Number.. for.. fields 
        min: 1, // Value can't be less than 1
        max: 5,  // Value can't be more than 5
        required: true // It has to be given
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, {
    timestamps: true // This states that it will include create and updated
});

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String, // If a "label" is not given, it will have a default value of empty
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema] // One to many. Meaning a Dish Object can have multiple comments. 
}, 
{
    usePushEach: true, // This will push into the array of comments. line 62
    timestamps: true //this states that it will include create and updated
});


/*
The first argument is the singular name of the collection your model is for. 
** Mongoose automatically looks for the plural, lowercased version of your model name. 
** Thus, for the example above, the model Dish is for the dishes collection in the database.
The .model() function makes a copy of schema.

in other words
/ create a constructor function for our model and store in variable 'Dish'
*/
var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes