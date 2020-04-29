const { Digimon } = require('../models')

class DigimonController {

    static findAll (req,res,next) {
        let { id } = req.loggedUser
        Digimon.findAll({
            where: {
                UserId: `${id}`
            }
        })
            .then(data => {
                res.status(200).json({
                    Digimons: data
                })
            })
            .catch(next)
    }
    
    static create (req,res,next) {
        let { name,level,imgUrl } = req.body
        let { id } = req.loggedUser

        Digimon.create({ 
            name,
            level,
            imgUrl,
            UserId: `${id}` 
        })
            .then(data => {
                res.status(201).json({
                    message: 'Digimons Created',
                    Digimon: data
                })
            })
            .catch(next)
    }
}

module.exports = DigimonController