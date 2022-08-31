/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 16:58:19
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-29 04:24:13
 * @FilePath     : \web-B-tmp\src\vite-env.d.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
declare module 'wangeditor'
declare module 'css-color-function'
declare module 'fuse.js'
declare module 'vue3-print-nb'
