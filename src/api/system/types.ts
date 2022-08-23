import { SLogin } from '@/types/system'

export interface ISystemApi {
    login: (query: SLogin) => Promise<any>
}
