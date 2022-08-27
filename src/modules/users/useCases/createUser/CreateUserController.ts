import {Request, Response} from "express"
import {CreateUserUseCase} from "./CreateUserUseCase"


export class CreateUserController {
    async handle(req: Request, res: Response){
        const {nome, cpf, email, telefone, sexo, datanascimento} = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({nome, cpf, email, telefone, sexo, datanascimento});

        return res.status(201).json(result);
    }
}