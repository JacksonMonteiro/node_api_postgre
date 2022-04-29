// Env File
const dotenv = require('dotenv/config');

// Requires
const jwt = require('jsonwebtoken');
const admin = require('../models/Admins');

// TOKEN
let systemToken;

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

    login: (req, res, next) => {
        admin.findAll({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(admin => {
            const id = admin[0].id;
            
            systemToken = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: '24h'
            });

            return res.status(200).json({
                error: false,
                message: "Login realizado com sucesso",
                auth: true,
                token: systemToken,
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao realizar login",
                auth: false,
                token: null
            })
        })
    },

    verifyJWT: (req, res, next) => {
        const token = systemToken;

        if (!token) {
            return res.status(400).json({
                auth: false,
                message: "Não há um token válido"
            })
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    auth: false,
                    message: "Falha ao autenticar token"
                })
            }
            
            req.id = decoded.id;
            next();
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
    },

    getAdmin: (req, res) => {
        admin.findAll({
            where: { id: req.params.id }
        }).then(admin => {
            return res.status(200).json({
                error: false,
                message: "Administrador encontrado com sucesso",
                admin
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro! Administrador não encontrado"
            });
        });
    },

    updateAdmin: (req, res) => {
        admin.update({
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
                message: "Administrador atualizado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao atualizar dados do administrador"
            });
        });
    },

    deleteAdmin: (req, res) => {
        admin.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "Administrador deletado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: false,
                message: "Erro ao deletar administrador"
            });
        });
    }
}

module.exports = controller;