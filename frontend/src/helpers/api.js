import axios from 'axios'

const service = axios.create()
service.defaults.baseURL = "http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com"

service.interceptors.request.use((config) => {

    const {access_token} = document.cookie
        .split(';')
        .map(s => s.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {access_token: ''})

    config.headers.common['Authorization'] = access_token

    return config
})

service.interceptors.response.use((r) => r.data)

export default service



export const onSubmit = (data) => alert(JSON.stringify(data));




