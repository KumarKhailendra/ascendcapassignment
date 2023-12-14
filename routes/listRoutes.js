const express = require("express");
const {createList, getLists, updateTaskList, deleteList, deleteTask} = require("../controller/listController");

const router = express.Router();

router.route("/create").post(createList);
router.route("/all").get(getLists);
router.route("/update").put(updateTaskList);
router.route("/delete/list/:id").delete(deleteList);
router.route("/delete/task/:id").delete(deleteTask);

module.exports = router;