import {useMutation, useQuery} from "react-query"
import profileService from "../services/ProfileServices"

export const useProfileData = () => useQuery("ProfileData", profileService.getUserProfileData)
export const useSaveNewData = () => useMutation("SaveNewData", profileService.saveNewData)
export const useNewUserPhoto = () => useMutation("SaveNewUserPhoto", profileService.uploadNewUserPhoto)