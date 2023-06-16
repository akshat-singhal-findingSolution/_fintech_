import fs from "fs";
import { User } from "../models/data.js";

const filePath = './utils/data.csv';

export const upload = async (req, res) => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');

        const rows = data.split('\n');
        const headers = rows[0].split(',');

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            const rowData = {};
            for (let j = 0; j < headers.length; j++) {
                rowData[headers[j]] = row[j];
            }

            const { id, date, user, department, software, seats, amount } = rowData;

            if (!id || !date || !user || !department || !software || !seats || !amount) { }
            else {
                const isExist = await User.findOne({ id });
                if (!isExist) {
                    const _user = new User({ id, date, user, department, software, seats, amount });
                    const isSaved = await _user.save();
                }
            }
        }

        res.status(200).json({
            success: true,
            message: "File imported successfully!"
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "File imported failed!"
        })
    }
}