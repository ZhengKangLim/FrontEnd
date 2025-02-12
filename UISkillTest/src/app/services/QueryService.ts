import { pageSize } from "../constants/Constant.ts";
import queryRequest from "./QueryRequests.ts";

class QueryService {
    async queryCustomers(pageNo:number) {
        const param = {
            Skip: (pageNo - 1) * pageSize,
            Take: pageSize
        }
        const response:any = await queryRequest.queryCustomers(param);
        return response;
    }

    async queryOrders(pageNo:number) {
        const param = {
            Skip: (pageNo - 1) * pageSize,
            Take: pageSize
        }

        const response:any = await queryRequest.queryOrders(param);
        return response;
    }

    async getCustomerDetails(id:any) {
        const response:any = await queryRequest.getCustomerDetails(id);
        return response;
    }

    async getOrdersDetails(id:any, recordId?:any) {
        const response:any = await queryRequest.getOrdersDetails(id);
        return response;
    }
}

const queryService = new QueryService();
export default queryService;