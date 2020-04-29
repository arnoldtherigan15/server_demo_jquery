const { User } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register (req,res,next) {
        
        let {email,password} = req.body
        User.create({email,password})
        .then(result => {
            let payload = {email:result.email,id:result.id}
            let token = generateToken(payload)
            res.status(201).json({
                data:{token,id:result.id,email:result.email},
                msg: 'user succesfully register'
            })
        })
        .catch(next)
    }
    static login (req,res,next) {
        let {email,password} = req.body
        User.findOne({
            where : {
                email
            }
        })
        .then(user=>{
            if (user) {
                if(comparePass(password,user.password)) {
                    let payload = {email:user.email,id:user.id}
                    let token = generateToken(payload)
                    res.status(201).json({token,id:user.id,email:user.email})
                } else {
                    next({status:404,msg:'invalid email/password'})
                }
            } else {
                next({status:404,msg:'invalid email/password'})
            }
        })
        .catch(next)
    }
}

module.exports = UserController