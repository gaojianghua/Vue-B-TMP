/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-02 05:43:25
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-02 16:27:28
 * @FilePath     : \web-B-tmp\src\directives\permission.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import useStore from '@/store'

const checkPermission = (el: any, bind: any) => {
    // 获取对应的权限
    const { value } = bind
    // 获取当前用户的所有功能权限
    const points = useStore().user.userInfo.permission.points
    // value 必须是一个数组
    if (value && Array.isArray(value)) {
        // 匹配对应的指令
        const hasPermission = points.some((point: any) => {
            return value.includes(point)
        })
        // 匹配失败
        if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el)
        }
    } else {
        throw new Error('v-permission value is ["admin", "editor", ...]')
    }
}

export default {
    // 在绑定元素的父组件被挂载之后调用
    mounted(el: any, bind: any) {
        checkPermission(el, bind)
    },
    // 在包含组件的 VNode 及其子组件的 VNode 更新后调用
    update(el: any, bind: any) {
        checkPermission(el, bind)
    }
}
