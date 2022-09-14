import service from "../../helpers/axios"

const homeService = {
    searchForMembers: (data): Promise => service.post(`searchForMembers`, data),
}

export default homeService