import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});

    const user = await prisma.user.create({
        data: {
            nome: "Primeiro teste",
            cpf: "123.456.789-90",
            email: "joao@gmail.com",
            telefone: "123456789",
            sexo: "masculino",
            datanascimento: "02/03/1996"
        }
    })
}

main();