import { POST, GET } from './config'

export const login = (params = {}) => POST('/uaa/form/pcToken', params)
export const getCurrentUserInfo = (params = {}) => GET('/uaa/user/getCurrentUser', params)