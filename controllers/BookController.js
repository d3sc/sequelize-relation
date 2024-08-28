import Book from "../model/BookModel.js";
import User from "../model/UserModel.js";

export async function getAllBooks(req, res) {
  try {
    const data = await Book.findAll();

    res.send(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getBookShelf(req, res) {
  const { id } = req.query;
  try {
    const data = await Book.findAll({
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
  } catch (error) {
    console.log(error);
  }
}
