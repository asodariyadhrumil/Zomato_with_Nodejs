const mongoose = require("mongoose");
const RestorantTypeSchema = new mongoose.Schema(
    {
        type_select: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const RestorantType = mongoose.model("restorant_type", RestorantTypeSchema);
module.exports = RestorantType;

