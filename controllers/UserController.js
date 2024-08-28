import User from "../model/UserModel.js";

export async function getAllUser(req, res) {
  try {
    const data = await User.findAll();

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}
