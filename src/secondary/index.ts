/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 01:44:34
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-24 02:25:52
 * @FilePath     : \web-B-tmp\src\secondary\index.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import progress from './progress'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'

const components = [
    chooseArea,
    trend,
    notification,
    list,
    menu,
    chooseTime,
    chooseDate,
    chooseCity,
    progress,
    form,
    modalForm,
    table,
    calendar
]

export default {
    install(app: App) {
        components.map((item) => {
            app.use(item)
        })
    }
}
