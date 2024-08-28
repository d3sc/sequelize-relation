import Profile from "../model/ProfileModel.js";
import User from "../model/UserModel.js";

export async function getAllProfile(req, res) {
  try {
    const data = await Profile.findAll();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getProfileById(req, res) {
  const { id } = req.query;
  try {
    const data = await Profile.findOne({
      where: {
        UserId: id,
      },
      include: [
        {
          model: User,
          as: "User",
          required: true,
          attributes: ["name", "email"],
        },
      ],
    });

    res.send(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}
