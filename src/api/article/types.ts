/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 01:51:54
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-13 04:26:30
 * @FilePath     : \web-B-tmp\src\api\article\types.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
export interface IArticleApi {
    getArticleList: (query: any) => Promise<any>
    articleSort: (query: any) => Promise<any>
    removeArticle: (query: any) => Promise<any>
    getArticleDetail: (query: any) => Promise<any>
    createArticle: (query: any) => Promise<any>
    editorArticle: (query: any) => Promise<any>
    updateArticle: (query: any) => Promise<any>
}
