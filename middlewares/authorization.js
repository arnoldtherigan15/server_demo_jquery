const { Todo } = require('../models')

function authorization(req,res,next) {
    let {id} = req.params
    Todo.findOne({
        where: {id}
    })
    .then(data => {
        if (data) {
            if (data.UserId == req.loggedUser.id) {
                next()
            } else {
                next({status:401, msg: 'not authorized'})
            }
        }else {
            next({status:400, msg: 'data not found'})
        }
    })
    .catch(next)

    .catch(next)
}



module.exports = { authorization }