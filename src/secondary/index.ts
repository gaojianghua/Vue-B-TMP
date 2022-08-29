/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 01:44:34
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 21:13:51
 * @FilePath     : \web-B-tmp\src\secondary\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { App } from 'vue'
import menu from './menu'
import table from './table'
import list from './list'

const components = [menu, table, list]

export default {
    install(app: App) {
        components.map((item) => {
            app.use(item)
        })
    }
}
