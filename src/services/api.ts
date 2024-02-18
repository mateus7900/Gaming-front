import axios from "axios";
import { URL_API_BASE } from "../env/env";

const api = axios.create({
    baseURL: URL_API_BASE
});

export default api;