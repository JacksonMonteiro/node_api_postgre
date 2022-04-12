const admin = require('../models/Admins');

const controller = {
    createAdmin: (req, res) => {
        admin.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "Usuário cadastrado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro"
            });
        });
    },

    getAdmins: (req, res) => {
        admin.findAll().then((admin) => {
            return res.status(200).json({
                admin
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
            })
        });
    }
}

module.exports = controller;