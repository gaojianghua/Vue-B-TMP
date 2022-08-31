/* eslint-disable */
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'
import { BookType } from 'xlsx'

function datenum(v: string, date1904?: Date) {
    if (date1904) v += 1462
    var epoch = Date.parse(v)
    return (epoch - Number(new Date(Date.UTC(1899, 11, 30)))) / (24 * 60 * 60 * 1000)
}

function sheet_from_array_of_arrays(data: any[], opts?: any) {
    var ws = {}
    var range = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    }
    for (var R = 0; R != data.length; ++R) {
        for (var C = 0; C != data[R].length; ++C) {
            if (range.s.r > R) range.s.r = R
            if (range.s.c > C) range.s.c = C
            if (range.e.r < R) range.e.r = R
            if (range.e.c < C) range.e.c = C
            var cell: any = {
                v: data[R][C]
            }
            if (cell.v == null) continue
            var cell_ref = XLSX.utils.encode_cell({
                c: C,
                r: R
            })

            if (typeof cell.v === 'number') cell.t = 'n'
            else if (typeof cell.v === 'boolean') cell.t = 'b'
            else if (cell.v instanceof Date) {
                cell.t = 'n'
                cell.z = XLSX.SSF._table[14]
                cell.v = datenum(cell.v)
            } else cell.t = 's'

            ws[cell_ref as keyof typeof ws] = cell as never
        }
    }
    if (range.s.c < 10000000)
        ws['!ref' as keyof typeof ws] = XLSX.utils.encode_range(range) as never
    return ws
}

interface IWork extends Workbook {
    SheetNames: any[]
    Sheets: any
}

declare class Workbook extends Error {
    constructor()
}

function Workbook(this: IWork) {
    if (!(this instanceof Workbook)) return new Workbook()
    this.SheetNames = []
    this.Sheets = {}
}

function s2ab(s: any) {
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
    return buf
}

export const export_json_to_excel = ({
    multiHeader = [],
    header = <any | null>null,
    data = <any[]>[],
    filename = <string>'',
    merges = [],
    autoWidth = true,
    bookType = 'xlsx'
} = {}) => {
    // 1. 设置文件名称
    filename = filename || 'excel-list'
    // 2. 把数据解析为数组，并把表头添加到数组的头部
    data = [...data]
    data.unshift(header)
    // 3. 解析多表头，把多表头的数据添加到数组头部（二维数组）
    for (let i = multiHeader.length - 1; i > -1; i--) {
        data.unshift(multiHeader[i])
    }
    // 4. 设置 Excel 表工作簿（第一张表格）名称
    var ws_name = 'SheetJS'
    // 5. 生成工作簿对象
    var wb = new Workbook() as IWork
    // 6. 将 data 数组（json格式）转化为 Excel 数据格式
    var ws = sheet_from_array_of_arrays(data)
    // 7. 合并单元格相关（['A1:A2', 'B1:D1', 'E1:E2']）
    if (merges.length > 0) {
        if (!ws['!merges' as keyof typeof ws]) ws['!merges' as keyof typeof ws] = [] as never
        merges.forEach((item) => {
            ;(ws['!merges' as keyof typeof ws] as any).push(XLSX.utils.decode_range(item))
        })
    }
    // 8. 单元格宽度相关
    if (autoWidth) {
        /*设置 worksheet 每列的最大宽度*/
        const colWidth = data.map((row: any) =>
            row.map((val: any) => {
                /*先判断是否为null/undefined*/
                if (val == null) {
                    return {
                        wch: 10
                    }
                } else if (val.toString().charCodeAt(0) > 255) {
                    /*再判断是否为中文*/
                    return {
                        wch: val.toString().length * 2
                    }
                } else {
                    return {
                        wch: val.toString().length
                    }
                }
            })
        )
        /*以第一行为初始值*/
        let result = colWidth[0]
        for (let i = 1; i < colWidth.length; i++) {
            for (let j = 0; j < colWidth[i].length; j++) {
                if (result[j]['wch'] < colWidth[i][j]['wch']) {
                    result[j]['wch'] = colWidth[i][j]['wch']
                }
            }
        }
        ws['!cols' as keyof typeof ws] = result as never
    }

    // 9. 添加工作表（解析后的 excel 数据）到工作簿
    wb.SheetNames.push(ws_name)
    wb.Sheets[ws_name] = ws
    // 10. 写入数据
    var wbout = XLSX.write(wb, {
        bookType: bookType as BookType,
        bookSST: false,
        type: 'binary'
    })
    // 11. 下载数据
    saveAs(
        new Blob([s2ab(wbout)], {
            type: 'application/octet-stream'
        }),
        `${filename}.${bookType}`
    )
}
