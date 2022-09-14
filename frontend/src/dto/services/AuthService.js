import service from "../../helpers/api";

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
}

export default authService
