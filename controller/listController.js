const db = require("../Database/db");
const Lists = db.Lists;
const Tasks = db.Tasks;
const User = db.Users


const createList = async (req, res) => {
    try {
        const {listName, author, tasks} = req.body;
        const list = await Lists.create({listName, author});
        await Promise.all(tasks.map((task)=> Tasks.create({...task, listId: list.id})))

        const listData = await Lists.findByPk(list.id, {include: Tasks})

        res.status(200).json({listData})
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const getLists = async (req, res) => {
    try {
        const lists = await Lists.findAll({
            attributes: ["id", "listName"],
            where: {
                author: req.query.id
            },
            include: [{model: Tasks,attributes: ["id", "taskName"],},{model: User,attributes: ["id", "firstName", "lastName", "email"], as: "creator"}]
        });

        res.status(200).json({lists})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const updateTaskList = async (req, res) => {
    try {

        await Tasks.update({ listId: req.query.listId }, {
            where: {
              id: req.query.taskId
            }
          })

          res.status(200).json({msg:"Update List Task Succesfully"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const deleteList = async (req, res) => {
    try {
        await Lists.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Delete List Succesfully"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const deleteTask = async (req, res) => {
    try {
        await Tasks.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Delete List Succesfully"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


module.exports = {createList, getLists, updateTaskList, deleteList, deleteTask}