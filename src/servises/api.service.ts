import axios from "axios";
import {ITodo} from "../models/ITodo";
import {IDJResponse} from "../models/IDJResponse";
import todos from "../components/Todos";

const axiosInstance = axios.create({
    baseURL: 'http://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

export const apiService = {
    todo: {
        getAll: async (page: number):Promise<IDJResponse & {todos:ITodo[]}> => {
            const skip: number = (page - 1) * 30

            const {data} = await axiosInstance.get<IDJResponse & {todos:ITodo[]}>('/todos', {
                params: {
                    skip: skip
                }
            })

            return data
        }
    }
}