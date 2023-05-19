const { Worker } = require('../models/models');
const ApiError = require('../error/apiError');
const uuid = require('uuid');
const path = require('path');
const { where } = require('sequelize');


class WorkerController {

    async create(req, res) {
        try {
            const { name, secondName, surname, department, position, telephone } = req.body;
            const worker = await Worker.create({ name, secondName, surname, department, position, telephone });
            return res.json(worker);
        } catch (e) {
            console.log(e.message)
            return res.json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            let worker = await Worker.findOne(
                {
                    where: { id }
                }
            );
            return res.json(worker);
        } catch (e) {
            console.log(e.message)
            return res.json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const workers = await Worker.findAll();
            return res.json(workers);
        } catch (e) {
            console.log(e.message)
            return res.json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            let worker = await Worker.destroy(
                {
                    where: { id }
                }
            );
            return res.json(worker);
        } catch (e) {
            console.log(e.message)
            return res.json(e.message)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, secondName, surname, department, position, telephone } = req.body;
            const worker = await Worker.update(
                {
                    name,
                    secondName,
                    surname,
                    department,
                    position,
                    telephone,
                },
                {
                    where: { id }
                }
            )
            return res.json(worker);
        } catch {
            console.log(e.message)
            return res.json(e.message)
        }
    }
}


module.exports = new WorkerController();