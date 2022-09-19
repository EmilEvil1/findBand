import authService from "../services/AuthService"
import { useMutation } from "react-query"

export const useSignIn = () => useMutation("SignIn", authService.signIn)
export const useSignUp = () => useMutation("SignUp", authService.signUp)
export const useResetPassword = () => useMutation("ResetPassword", authService.resetPassword)
export const useCreateNewPassword = () => useMutation("CreatePassword", authService.createNewPassword)