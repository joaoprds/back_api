import { User } from "@prisma/client";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({nome, cpf, email, telefone, sexo, datanascimento}: CreateUserDTO): Promise<User>{
        const userExists =  await prisma.user.findUnique({
            where: { email }
        })

        if(userExists) {
            throw new AppError("Usuario já existe cadastrado com o mesmo email")

        }
        const user = await prisma.user.create({
            data: { nome, cpf, email, telefone, sexo, datanascimento }
        })

        return user;
    }
}