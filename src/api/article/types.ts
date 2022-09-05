export interface IArticleApi {
    getArticleList: (query: any) => Promise<any>
    articleSort: (query: any) => Promise<any>
    removeArticle: (query: any) => Promise<any>
    getArticleDetail: (query: any) => Promise<any>
    createArticle: (query: any) => Promise<any>
    updateArticle: (query: any) => Promise<any>
}
