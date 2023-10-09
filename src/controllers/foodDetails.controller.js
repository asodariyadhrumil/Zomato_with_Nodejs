const {
    foodDetailsService
} = require("../services")

/* ------------------------- Create foodDetails controller ------------------------- */

const createFoodDetails = async (req, res) => {
    try {
        const reqBody = req.body

        if (req.file) {
            reqBody.Food_img = req.file.filename;
        } else {
            throw new Error("Food image is required!");
        }

        const foodDetails = await foodDetailsService.createFoodDetails(reqBody);
        if (!foodDetails) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "foodDetails create successfully!",
            data: {
                foodDetails
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
}

/* ----------------------- List foodDetails controller ----------------------- */

const listfoodDetails = async (req, res) => {
    try {
        const foodDetails = await foodDetailsService.listfoodDetails();

        if (!foodDetails) {
            throw new Error("mething wen twrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "foodDetails List Successfully!",
            data: {
                foodDetails
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* ---------------------- Delete foodDetails Controller ---------------------- */

const deletefoodDetails = async (req, res) => {
    try {
        const id = req.params.Id
        const foodDetails = await foodGallaryService.listfoodDetails();
        if (!foodDetails) {
            throw new Error("Please Providde foodDetailsId!");
        };
        await foodDetailsService.deletefoodDetails(id)

        res.status(200).json({
            success: true,
            message: "foodDetails Successfully Delete",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

/* ---------------------- Update foodDetails controller ---------------------- */

const updatefoodDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const foodDetails = await foodDetailsService.getId(id);
        if (!foodDetails) {
            throw new Error("Mobile not found!")
        }
        await foodDetailsService.updatefoodDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: "foodDetails Successfully Updated"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createFoodDetails,
    listfoodDetails,
    deletefoodDetails,
    updatefoodDetails
}