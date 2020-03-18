const express = require("express");
const router = express.Router();

// requires controllers
const {avik, test, insertRecord, insertManyRecord, getAllUsers, getOneUserById, updateUser, updateManyUsers, deleteUser, deleteManyUsers} = require("../api/controllers/avik");

router.get("/", avik);

router.get("/test", test);

router.get("/test/hello", (req, res) => {
    res.json({msg: "test hello"});
});

// create
// insert single user
router.post("/insert", insertRecord);
// insert multiple users
router.post("/insertmany", insertManyRecord);

// read
// read all users
router.get("/getallusers", getAllUsers);
// read one user by id
router.get("/getuser/:id", getOneUserById);

// update
// update multiple
router.put("/updatemanyusers", updateManyUsers);
// update one
router.put("/updateuser/:id", updateUser);

// delete
// delete one
router.delete("/deleteuser/:id", deleteUser);
// delete many
router.delete("/deletemanyusers", deleteManyUsers);

module.exports = router;