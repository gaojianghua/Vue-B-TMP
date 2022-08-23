import http from '@/utils/request'
import * as T from './types'

const systemApi: T.ISystemApi = {
    login(query) {
        return http.post('/system/login', query)
    }
}
export default systemApi
