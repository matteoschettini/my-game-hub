import axios from "axios";

export default axios.create(
    {
        baseURL: "https://api.rawg.io/api",
        params: {
            key: 'b2a12c89394e4e3daa70e5c01a9598d9'
        }
    }
)