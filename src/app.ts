import express, {Response, Request, Express, NextFunction} from 'express';
import {sequelize} from "./database/sequelize";
import bodyParser from 'body-parser';
import {errors} from 'celebrate';
import 'express-async-errors';
import {AppError} from './utils/AppError'
import routes from './api/routes/index';
import { Error } from 'sequelize';
import { initdb } from './database/initdb';

const app: Express = express();
const port: number = 3333;

app.use(bodyParser.json());

app.use('/', routes);

app.get('/', (req : Request, res:Response)=>{
    res.send('Hello world express + typescript!!');
})

app.use(errors());

app.use((err:AppError, req: Request, res: Response, next: NextFunction)=>{
    console.log(err);
    try{
        res.status(err.getHttpCode()).send(err.getError())
    } catch(error){
        const appError = new AppError ('InternalServerError', 'Erro Interno do Servidor',500);
        res.status(500).send(appError.getError());
    }
});

app.listen(port,
     () =>{
        console.log(`Servidor Rodando na porta ${port}`);
});

sequelize.authenticate().then(()=>{
    console.log('Conectado ao mySql com sucesso!');
}).catch((error:Error)=>{
    console.log('Não foi possível conectar ao postgres ' + error );
});

initdb();



