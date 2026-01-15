import Plan from "../models/Plan.js"
export const loadPlan = async (req, res) => {
    try {
        const userId = req.body.userId;
        const plans = await Plan.find({ userId }).lean();
        return res.status(200).json(plans);
    } catch (err) {
        console.error("Error fetching plans by userId:", err);
        return res.status(500).json({ error: "Failed to fetch plans" });
    };
};