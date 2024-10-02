import {Sequelize} from 'sequelize'

const db = new Sequelize('database_goldeng', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

export default db