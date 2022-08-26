/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-26 21:43:46
 * @FilePath     : \web-B-tmp\src\utils\conversion.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { formula } from '@/constants/formula'
import color from 'css-color-function'
import axios from 'axios'
import rgbHex from 'rgb-hex'
import { version } from 'element-plus/package.json'

/**
 * 把驼峰转换成横杠连接
 */
export const toLine = (value: string) => {
    return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

/**
 * 判空操作
 */
export const isNull = <T>(data: T) => {
    if (!data) return true
    if (JSON.stringify(data) === '{}') return true
    if (JSON.stringify(data) === '[]') return true
}

/**
 * 把生成的样式表写入 style 中
 */
export const writeNewStyle = (newStyle: string) => {
    const style = document.createElement('style')
    style.innerHTML = newStyle
    document.head.appendChild(style)
}

/**
 * 根据主题色, 生成最新的样式表
 */
export const generateNewStyle = async (parimaryColor: string) => {
    // 根据主色生成色值表
    const colors = await generateColors(parimaryColor)
    // 获取当前 element-plus 的默认样式, 并且把需要进行替换的色值打上标记
    let cssText = await getOriginalStyle()
    // 遍历生成的色值表, 在默认样式表里进行全局替换
    Object.keys(colors).forEach((key) => {
        const reg = new RegExp(key, 'g')
        cssText = cssText.replace(reg, colors[key])
    })
    return cssText
}

/**
 * 根据主题色, 生成色值表
 */
export const generateColors = (primary: string) => {
    if (!primary) return
    const colors: any = {
        gaoprimary: primary
    }
    Object.keys(formula).forEach((key) => {
        const value = formula[key as keyof typeof formula].replace(/primary/g, primary)
        colors[key as keyof typeof formula] = '#' + rgbHex(color.convert(value))
    })
    return colors
}

/**
 * 获取当前 element-plus 的默认样式
 */
export const getOriginalStyle = async () => {
    const url = `https://unpkg.com/element-plus@${version}/dist/index.css`
    const { data } = await axios(url)
    return getStyleTemplate(data)
}

/**
 * 把需要进行替换的色值打上标记
 */
const getStyleTemplate = (data: string) => {
    // element-plus 默认色值
    const colorMap = {
        '#3a8ee6': 'gaoshade-1',
        '#409eff': 'gaoprimary',
        '#53a8ff': 'gaolight-1',
        '#66b1ff': 'gaolight-2',
        '#79bbff': 'gaolight-3',
        '#8cc5ff': 'gaolight-4',
        '#a0cfff': 'gaolight-5',
        '#b3d8ff': 'gaolight-6',
        '#c6e2ff': 'gaolight-7',
        '#d9ecff': 'gaolight-8',
        '#ecf5ff': 'gaolight-9',
        '#337ecc': 'gaodark-2',
        '#606266': 'gaoregular'
    }

    Object.keys(colorMap).forEach((key) => {
        const value = colorMap[key as keyof typeof colorMap]
        data = data.replace(new RegExp(key, 'ig'), value)
    })
    return data
}
