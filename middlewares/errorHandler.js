function errorHandler (err,req,res,next) {
    console.log('ERRRRORRR');
    console.log(err);
    if(err.message == "Validation error: Invalid validator function: unique") {
        res.status(400).json({message:'email is already been used'})
    } else if (err.name == "SequelizeValidationError") {
        let message = []
        for (let i = 0; i < err.errors.length; i++) {
            message.push(err.errors[i].message)
        }
        res.status(400).json({message:message.join(',')})
    }
    else {
        let status = err.status || 500
        let message = err.msg || 'internal server error'
        res.status(status).json({message})
    }
}

module.exports = errorHandler