/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-24 03:12:46
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-30 13:23:39
 * @FilePath     : \web-B-tmp\src\mock\system.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
export default {
    login: (params: any) => {
        const { username, password } = JSON.parse(params.body)
        console.log(username, password)
        if (username !== 'admin') {
            return {
                code: 500,
                data: '',
                msg: '用户名错误'
            }
        } else if (password !== 'e10adc3949ba59abbe56e057f20f883e') {
            return {
                code: 500,
                data: '',
                msg: '密码错误'
            }
        }
        return {
            code: 200,
            data: {
                token: '123456'
            },
            msg: '登录成功'
        }
    }
}
