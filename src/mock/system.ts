export default {
    login: (params: any) => {
        let info = JSON.parse(params.body)
        console.log(info)
        return {
            code: 200,
            data: {
                token: '123456'
            },
            msg: '登录成功'
        }
    }
}
