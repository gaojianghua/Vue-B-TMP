let data = {
    title: '前端开发工程师',
    nickname: '高江华',
    vipLevel: 5,
    company: '',
    introduction: '我自横刀向天笑, 去留肝胆两昆仑',
    homePage: 'https://gaojianghua.cn/doce',
    avatar: 'https://gaojianghua.oss-cn-hangzhou.aliyuncs.com/home/%E7%81%B0%E5%A4%AA%E7%8B%BC.png'
}

export default {
    getProfile: () => {
        return {
            code: 200,
            data: data,
            msg: '登录成功'
        }
    }
}
