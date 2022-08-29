/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-28 06:58:57
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 06:59:25
 * @FilePath     : \web-B-tmp\src\secondary\table\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { App } from 'vue'
import table from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
    install(app: App) {
        app.component('GTable', table)
    }
}
