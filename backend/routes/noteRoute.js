const protect =require("../middlewares/authMiddleware.js");
const { route } =require("./user.routes.js");
const express =require( "express");
// protect
const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController.js");

const router = express.Router();


router.route("/").get(protect,getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

module.exports =router;