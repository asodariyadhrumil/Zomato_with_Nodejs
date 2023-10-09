const mongoose = require("mongoose");
const config = require("../config/config")

const FoodDetailsSchema = new mongoose.Schema({
    Food_name: {
        type: String,
        trim: true
    },
    Price: {
        type: Number,
        trim: true
    },
    Desc: {
        type: String,
        trim: true
    },
    Food_img: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    },
    categories: {
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    },
    rest_type: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_type'
    },
    rest_details: {
        type: mongoose.Types.ObjectId,
        ref: 'rest_details'
    },
   
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.Food_img) {
                    data.Food_img = `${config.base_url}images/${data.Food_img}`;
                }
            },
        },
    });

const FoodDetails = mongoose.model("FoodDetails", FoodDetailsSchema);
module.exports = FoodDetails;