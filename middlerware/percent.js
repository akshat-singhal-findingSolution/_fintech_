import { User } from "../models/data.js";

export const percent = async (req, res) => {
    try {
        const { start_date, end_date } = req.body;

        const total = await User.find({
            date: {
                $gte: start_date,
                $lt: end_date
            }
        }).count();
        const depart = await User.distinct("department");
        const ans = {}
        for (const element of depart) {
            const rangeData = await User.find({
                $and: [
                    {
                        date: {
                            $gte: start_date,
                            $lt: end_date
                        }
                    },
                    { department: element }
                ]
            }).count();
            ans[element] = (rangeData / total) + "%";
        }

        res.status(200).json(ans)
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Percent calculated failed!"
        })
    }
}