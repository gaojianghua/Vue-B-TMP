export interface IUserApi {
    getProfile: () => Promise<any>
    putProfile: (query: any) => Promise<any>
}
