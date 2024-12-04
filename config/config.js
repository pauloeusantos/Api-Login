import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log("Conectado com sucesso")
} catch(erro) {
    console.error("Nao foi possivel conectar", erro)
}