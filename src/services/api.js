import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.16.171.236:3333'
})

export default api