import axios from "axios"

const service = axios.create({
    headers: { accept: "application/json" },
})

export const fetchParams = (): Promise => {
    return axios.get(`/params.json?timestamp=${Date.now()}`).then((response) => {
        service.defaults.baseURL = response.data.host
        return response
    })
}
service.defaults.baseURL = "http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/"

service.interceptors.request.use((config) => {
    config.headers.common.Authorization = `Bearer ${getTokenFromCookie()}`
    return config
})


service.interceptors.response.use((response) => response.data)

const getTokenFromCookie = () =>
    document.cookie
        .split(";")
        .map((s) => s.trim().split("="))
        .reduce(
            (acc, [key, value]) => {
                acc[decodeURIComponent(key)] = decodeURIComponent(value)
                return acc
            },
            { access_token: "" },
        ).access_token

export default service
