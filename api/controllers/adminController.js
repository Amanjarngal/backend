import {Auth} from "../models/auth.schema.js";

export const makeAdminController = async (req, res) => {
  try {
    const { email } = req.body; // e.g. /api/admin/make-admin/:userId

    // const user = await Auth.findById(userId);
    const user = await Auth.findOne({email});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.role = "admin";
    await user.save();

    res.status(200).json({ message: "User promoted to admin", user });
  } catch (error) {
    res.status(500).json({ message: "Error promoting user", error: error.message });
  }
};
