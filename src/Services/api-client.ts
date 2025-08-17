import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "3f6421c0532b4899b72efe79f3b990b6"
    }
})