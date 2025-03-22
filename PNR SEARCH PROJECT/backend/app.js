import express from "express";
import cors from "cors";
import { PNR } from "./pnr.models.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Validate PNR Number (10-digit numeric)
const validatePnrNumber = (num) => {
    let pnrRegex = /^[0-9]{10}$/;
    let trainNameRegex = /^(?:[A-Za-z]+\s){2}[A-Za-z]+/

    if(num)
    if(pnrRegex.test(num)) {
        return true
    } else{
        if (trainNameRegex.test(num))
           return true
        else
           return false
    }
}


app.get("/search", async (req, res, next) => {
    try {
        if (!req.query.pnr) {
            return res.status(200).json({ 
                message: "Please enter a valid PNR number"
             })
        }

        const searchText = req.query.pnr;
        const isPnr = validatePnrNumber(searchText);

        if (!isPnr) {
            return res.status(200).json({ 
                message: "Invalid PNR number" 
            })
        } 

        const response = await PNR.find({ 
            $or: [{pnr_number: searchText}, {train_name:searchText}]

        })

        if (!response) {
            res.status(404).json({ 
                msg: "No data found",
                response
            })
        }

        res.status(200).json({ 
            data: response 
        });
    } catch (error) {
        res.status(404).json({ 
            msg: "No data found",
            error
        })
    }
}) 

export default app;