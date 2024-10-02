import { where } from "sequelize";
import Model from "../models/UserModel.js"

/** Métodos para el CRUD */

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
        const users = await Model.findAll();
        res.json(users);
    } catch (error) {
        res.json( { message: error.message });
    }
}
//Mostrar un registro
export const getUser = async (req, res) => {
    try {
        const user = await Model.findAll({
            where: { id: req.params.id }
        });
        res.json(user[0]);
    } catch (error) {
        res.json( { message: error.message });
    }
}
//Crear un registro
export const createUser = async (req, res) => {
    try {
        await Model.create(req.body);
        res.json( {
            "message": "¡El Registro fue creado correctamente!"
        });
    } catch (error) {
        res.json( { message: error.message });
    }
}
//Actualiza un registro
export const updateUser = async (req, res) => {
    try {
        await Model.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            "message": "¡El Registro fue actualizado correctamente!"
        });
    } catch (error) {
        res.json( { message: error.message });
    }
}
//Eliminar un registro
export const deleteUser = async (req, res) => {
    try {
        await Model.destroy({
            where: { id: req.params.id }
        });
        res.json({
            "message": "¡Registro eliminada correctamente!"
        });
    } catch (error) {
        res.json( { message: error.message });
    }
}