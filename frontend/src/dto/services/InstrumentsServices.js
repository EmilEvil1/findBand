import service from "../../helpers/axios"

const instrumentsService = {
    getInstruments: (): Promise => service.get(`instruments`)
}

export default instrumentsService