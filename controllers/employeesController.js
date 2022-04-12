// Env File
const dotenv = require('dotenv/config');

// Requires
const employee = require('../models/Employees');

// TOKEN
let systemToken;

const controller = {
    createEmployee: (req, res) => {
        employee.create({
            name: req.body.name,
            role: req.body.role
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "Funcionário cadastrado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao cadastrar funcionário"
            });
        });
    },

    getEmployees: (req, res) => {
        employee.findAll().then((employees) => {
            return res.status(200).json({
                error: false,
                message: "Dados encontrados com sucesso",
                employees
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao consultar dados dos funcionários",
            })
        });
    },

    getemployee: (req, res) => {
        employee.findAll({
            where: {
                id: req.params.id
            }
        }).then(employee => {
            return res.status(200).json({
                error: false,
                message: "funcionário encontrado com sucesso",
                employee
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro! funcionário não encontrado"
            });
        });
    },

    updateEmployee: (req, res) => {
        employee.update({
            name: req.body.name,
            role: req.body.role
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "funcionário atualizado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: true,
                message: "Erro ao atualizar dados do funcionário"
            });
        });
    },

    deleteEmployee: (req, res) => {
        employee.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({
                error: false,
                message: "funcionário deletado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                error: false,
                message: "Erro ao deletar funcionário"
            });
        });
    }
}

module.exports = controller;