import express from "express";
import { getAllUser } from "../controllers/UserController.js";
import {
  getAllProfile,
  getProfileById,
} from "../controllers/ProfileController.js";
import { getAllBooks, getBookShelf } from "../controllers/BookController.js";
const router = express.Router();

// users
router.get("/users", getAllUser);

// profile
router.get("/profile", getAllProfile);
router.get("/profile/user", getProfileById);

// book
router.get("/bookshelf", getAllBooks);
router.get("/bookshelf/user", getBookShelf);

export default router;
