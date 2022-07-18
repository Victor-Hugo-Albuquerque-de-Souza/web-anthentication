import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize ('classicmodels','root','@123',{
    host:'localhost',
    dialect: 'mysql',
    logging: false,
    define:{
        freezeTableName: true,
        timestamps:false,
    }
});


