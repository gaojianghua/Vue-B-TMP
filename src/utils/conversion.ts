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
