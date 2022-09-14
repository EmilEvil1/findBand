import service from "../../helpers/axios"

const profileService = {
    getUserProfileData: (): Promise => service.get(`profile`),
    saveNewData: (data): Promise => service.put(`profile`, data),
    uploadNewUserPhoto: (data): Promise => service.post(`uploadAvatar`, data),
}

export default profileService