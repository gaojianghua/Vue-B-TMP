/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 01:27:37
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 01:27:39
 * @FilePath     : \web-B-tmp\src\libs\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { App, defineAsyncComponent } from 'vue'

export default {
    install(app: App) {
        const components = import.meta.glob('./*/index.vue')
        for (const [fullPath, fn] of Object.entries(components)) {
            const componentName = 'g-' + fullPath.replace('./', '').split('/')[0]
            app.component(componentName, defineAsyncComponent<any>(fn))
        }
    }
}
