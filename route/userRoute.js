const userRoute = require('express').Router()
const {homeController,createController,updateController,notFound,createUser,readUser,readSingle,updateUser,deleteUser} = require('../controller/userController')

userRoute.get(`/`, homeController) //index route
userRoute.get(`/create`, createController)
userRoute.get(`/update`, updateController)

//create 
userRoute.post(`/api/newuser`, createUser)
//read
userRoute.get(`./api/users`, readUser)
//read single
userRoute.post(`./api/users/:id`, readSingle)

//update user
userRoute.post(`./api/update/:id`, updateUser)
//delete user
userRoute.patch(`./api/delete/:id`, deleteUser)

userRoute.all(`/*`, notFound)

module.exports = userRoute