const user = require('../models/User');

const controller = {
    createUser: (req, res) => {
        user.create({
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
        }).then(() => {
            res.status(200).json({
                error: false,
                message: "Usuário cadastrado com sucesso"
            });
        }).catch(() => {
            res.status(400).json({
                error: true,
                message: "Erro ao cadastrar o usuário",
            });
        });
    },

    getUsers: (req, res) => {
        user.findAll().then(user => {
            return res.status(200).json({
                error: false,
                user
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao realizar consulta no banco"
            });
        });
    },

    getUser: (req, res) => {
        user.findAll({
            where: {
                id: req.params.id
            }
        }).then(user => {
            return res.status(200).json({
                error: false, 
                user
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Usuário não encontrado"
            })
        });
    },

    updateUser: (req, res) => {
        user.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "Usuário alterado com sucesso",
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao alterar usuário",
            });
        });
    },

    deleteUser: (req, res) => {
        user.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "Usuário deletado com sucesso",
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao deletar usuário",
            });
        });
    }
}

module.exports = controller;