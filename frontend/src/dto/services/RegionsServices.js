import service from "../../helpers/axios"

const regionsService = {
    getRegions: (): Promise => service.get(`regions`)
}

export default regionsService