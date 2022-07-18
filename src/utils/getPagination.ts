import {OrderItem} from "sequelize/types"
import {Query} from '../shared/types/query';

export const getPagination = (id:number|string, query:Query)=>{
    let {size, page, sort, order} = query;

    let limit = size? size:undefined;
    let offset = page && size? size * (page-1) : undefined;

    if (!sort) sort = id;
    if (!order) order = "asc";

    return {
        limit:limit,
        offset:offset,
        order:[[sort,order] as OrderItem],
    }
};