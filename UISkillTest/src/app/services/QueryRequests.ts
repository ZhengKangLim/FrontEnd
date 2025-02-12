import axios from "axios";
import { AxiosHeader } from "../constants/AxiosHeader.ts";
import { PathConfig } from "../constants/PathConfig.ts";
const axiosInstance = axios.create();

class QueryRequest {
    async queryCustomers(param:any) {
        const attr = {
            url: PathConfig.baseUrl + PathConfig.queryCustomers + "?Skip=" + param.Skip + "&Take=" + param.Take,
            method: "GET",
            headers: AxiosHeader(),
        };

        const result = await axiosInstance(attr)
        return result.data;
    }

    async queryOrders(param:any) {
        const attr = {
            url: PathConfig.baseUrl + PathConfig.queryOrders + "?Skip=" + param.Skip + "&Take=" + param.Take,
            method: "GET",
            headers: AxiosHeader()
        };

        const result = await axiosInstance(attr)
        return result.data;
    }

    async getCustomerDetails(id:any) {
        const attr = {
            url: PathConfig.baseUrl + PathConfig.getCustomerDetails + "/" + id,
            method: "GET",
            headers: AxiosHeader()
        };

        const result = await axiosInstance(attr)
        return result.data;
    }

    async getOrdersDetails(id:any) {
        const attr = {
            url: PathConfig.baseUrl + PathConfig.getCustomerDetails + "/" + id + "/orders",
            method: "GET",
            headers: AxiosHeader()
        };

        const result = await axiosInstance(attr)
        return result.data;
    }
}

const queryRequest = new QueryRequest();
export default queryRequest;