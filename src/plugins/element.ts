/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 04:32:07
 * @FilePath     : \web-B-tmp\src\plugins\element.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import useStore from '@/store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from '@/utils/conversion'
import { App } from 'vue'

export default (app: App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    // 全局注册图标 牺牲一点性能
    // el-icon-xxx
    for (let i in ElementPlusIconsVue) {
        // 注册全部组件
        app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
    }
    app.use(ElementPlus, {
        locale: useStore().common.language === 'en' ? en : zhCn
    })
}
