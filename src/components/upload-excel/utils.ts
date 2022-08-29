/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-29 13:21:36
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-29 13:21:39
 * @FilePath     : \web-B-tmp\src\components\upload-excel\utils.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import * as XLSX from 'xlsx'

/**
 * 获取表头
 */
export const getHeaderRow = (sheet: XLSX.WorkSheet) => {
    const headers = []
    const range = XLSX.utils.decode_range(sheet['!ref' as any] as any)
    let C
    const R = range.s.r
    for (C = range.s.c; C <= range.e.c; ++C) {
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R }) as any] as any
        let hdr = 'UNKNOWN ' + C
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
    }
    return headers
}
/**
 * 过滤文件类型
 * */
export const isExcel = (file: File) => {
    return /\.(xlsx|xls|csv)$/.test(file.name)
}
