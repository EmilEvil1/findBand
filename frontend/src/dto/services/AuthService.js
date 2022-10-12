import service from "../../helpers/axios";

const authService = {
    signIn: (data: { email: string; password: string }): Promise<{ token?: string }> => {
        return service.post(`authenticate`, data)
    },
    signUp: (data): Promise => {
        return service.post(`register`, data)
    },
    resetPassword: (data): Promise => {
        return service.post(`resetPassword`, data)
    },
    createNewPassword: (data): Promise => {
        return service.post(`createNewPassword`, data)
    },
    telegramAuth: (data): Promise => {
        return service.post(`telegramAuthenticate`, data)
    },
}

export default authService
