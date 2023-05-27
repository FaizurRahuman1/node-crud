const path = require('path')
const User = require('../model/userModel')

//to handle view
const homeController = (req,res) => {
    res.sendFile(path.resolve( './view/index.html'))
}

const createController = (req,res) => {
    res.sendFile(path.resolve( './view/create.html'))
}

const updateController = (req,res) => {
    res.sendFile(path.resolve( './view/update.html'))
}

const notFound = (req,res) => {
    res.sendFile(path.resolve( './view/404.html'))
}

//create data
const createUser = async (req,res) => {
    try {
        const extEmail = await userInfo.findOne({email: req.body.email})
         if(extEmail)
         return res.status(400).json({msg: `${req.body.email} already registered`}
         )

         const extUserName = await User.findOne({username: req.body.username})
         if(extUserName)
         return res.status(400).json({msg: `${req.body.username} already registered`})

        const newUser = await userInfo(req.body)
        res.status(200).json({data: newUser,msg:"new user added successfully"})
        
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

//read
const readUser = async (req,res) => {
    try{
        const users = await User.find({})
        res.json({length:users.length, users})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}
//read single
const readSingle = async(req,res) => {
    try {
        const id = req.params.id
        const user = await User.findById({_id: id})

        if(!user)
        return res.status(404).json({msg: 'requested user id not found'})
        res.status(200).json({user})

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const updateUser = async (req,res) => {
    try {
       const id = req.params.id

       const extUser = await user.findById({_id:id})
       if(!extUser)
          return res.status(404).json({msg: `requested id =${id}, not found`})

          const updateUser = await user.findByIdAndUpdate({_id: id}, req.body)

          res.status(200).json({updateUser,msg: "user updated successfully"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

//delete data

const deleteUser = async (req,res) => {
    try {
       const id = req.params.id

       const extUser = await user.findById({_id:id})
       if(!extUser)
          return res.status(404).json({msg: `requested id =${id}, not found`})

           await User.findByIdAndDelete({_id: id})

           return res.status(200).json({updateUser,msg: `hi ${extUser.name}, your data has been removed`})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = {homeController,updateController,createController,notFound, createUser, readUser, readSingle,updateUser,deleteUser}


//read all data
//read single data



//update data

//delete data