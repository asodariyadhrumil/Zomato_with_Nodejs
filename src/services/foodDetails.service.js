const foodDetails = require("../models/foodDetails")

const createFoodDetails = async (reqBody) => {
    return foodDetails.create(reqBody)
};

const listfoodDetails = async () => {
    return foodDetails.find().populate({ path: "categories", select: ["Categories_name"] })
        .populate({ path: "restorant_details", select: ["restorant_name"] })
        .populate({ path: "restorant_type", select: ["restorant_type"] })
};

const getId = async (id) => {
    return foodDetails.findById(id);
};

const deletefoodDetails = async (Id) => {
    return foodDetails.findByIdAndDelete(Id)
};

const updatefoodDetails = async (Id, updatebody) => {
    return foodDetails.findByIdAndUpdate(Id, { $set: updatebody })
}

module.exports = {
    createFoodDetails,
    listfoodDetails,
    deletefoodDetails,
    updatefoodDetails
}