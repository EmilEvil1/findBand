import service from "../../helpers/axios"

const homeService = {
    searchForMembers: (regionId, instrumentId): Promise =>
        service.get(`searchForMembers/regionId=${regionId}&instrumentId=${instrumentId}`),
}

export default homeService