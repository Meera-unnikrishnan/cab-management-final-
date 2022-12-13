// const User = require('../model/user');
// const { body, validationResult } = require('express-validator');




// module.exports.userhomePost = async (req,res,next)=>{
//   await  User.findOne({
//         where : {
//             email : req.body.email,
//             pass_word : req.body.password
//         }
//     }).then((user)=>{
//         console.log("user found")
//         res.render('userIndex', {
//             data: user
//         });
//     })

// }


// module.exports.index = (req,res,next)=>{
//     console.log("trig")
//     console.log(req.params)
//     user.findAll().then(users => {
//         if(req.params.id){
//             console.log("if state")
//             let data = users.filter((i)=>{
//                 return i == req.params.id;
//             })
//             res.render('user-index',{
//                 data:data
//                 // identity : req.identity.user
//             })
//         }
//         else{
//         res.render('user-index',{
//             data : users,
//             // identity : req.identity.user
//         })}
//     })
// }



