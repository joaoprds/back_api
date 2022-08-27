import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { GetAllUserController } from "../modules/users/useCases/getAllusers/GetAllUserController";
import { prisma } from "../prisma/client";


const createUserController = new CreateUserController
const getAllUsersController = new GetAllUserController()
const userRoutes = Router();

userRoutes.post("/", createUserController.handle)
userRoutes.get("/", getAllUsersController.handle)
userRoutes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const users = await prisma.user.delete({
        where: {
            id
        },
    })
    res.json(users);
})
userRoutes.put("/:id", async (req, res) => {
    const { id, nome, cpf, email, telefone , sexo, datanascimento } = req.body;
    const updateUsers = await prisma.user.update({
        where: {id},
        data: {
                id,
                nome,
                cpf,
                email,
                telefone,
                sexo,
                datanascimento
            }
    })
    res.json(updateUsers);
})

export { userRoutes };