import { userInfo } from "os";
import Customer from "../api/models/CustomersModels";
import Employee from "../api/models/EmployeesModels";
import Office from "../api/models/OfficesModels";
import Order from "../api/models/OrdersModels";
import Payment from "../api/models/PaymentsModels";
import ProductLines from "../api/models/ProductLinesModels";
import Product from "../api/models/ProductsModels";
import User from "../api/models/UserModels";

export const initdb = async () => {
    console.log('Aguarde sincronização de tabelas..');
    Promise.all([
        await Customer.sync({alter:true}),
        await User.sync({alter:true}),
        await Employee.sync({alter:true}),
        await Office.sync({alter:true}),
        await Order.sync({alter:true}),
        await Payment.sync({alter:true}),
        await ProductLines.sync({alter:true}),
        await Product.sync({alter:true}),
    ]).then(()=>{
        console.log('Sincronização de tabelas concluída com sucesso.')
    });
}