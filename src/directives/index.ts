/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 17:56:13
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-02 16:16:37
 * @FilePath     : \web-B-tmp\src\directives\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { App } from 'vue'
import print from 'vue3-print-nb'
import permission from './permission'

export default (app: App) => {
    app.use(print)
    app.directive('permission', permission)
}
