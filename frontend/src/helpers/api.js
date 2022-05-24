import axios from 'axios'

const service = axios.create()
service.defaults.baseURL = "http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/"

const getCookie = function(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}


service.interceptors.request.use((config) => {
    if (!!getCookie('access_token')) {
        config.headers.common['Authorization'] = `Bearer ${getCookie('access_token')}`
    }
    return config
})

service.interceptors.response.use((r) => {
     return  r.data
})

export default service

export const onSubmit = (data) => alert(JSON.stringify(data));




