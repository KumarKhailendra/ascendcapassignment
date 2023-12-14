const db = require("../Database/db");
const bcrypt = require('bcrypt')

const Users = db.Users;

const createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body
        const user_email = await Users.findOne({
            where: {
                email
            }
        })
        if(user_email) return res.status(400).json({msg: "This email already exists."});

        const passwordHash = await bcrypt.hash(password, 12)

        const data = await Users.create({firstName, lastName, email, password: passwordHash} );

        await data.save();
        
        res.status(200).json({
            msg: 'User create Success!',
            data
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body
        await Users.update({firstName, lastName, email, password}, {
            where: {
              id: req.params._id
            }
          });
    
        const data = await Users.findByPk(req.params._id)
    
        res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await Users.findOne({
            where: {
                email
            }
        })
        if(!user) return res.status(400).json({msg: "user not exist u"});

        const isMatch = await bcrypt.compare(password, user?.password)

        if(!isMatch) return res.status(400).json({msg: "user not exist p"});
        res.status(200).json({
            data : user
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
module.exports = {createUser, updateUser, login}