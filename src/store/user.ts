import { defineStore } from 'pinia'
import MD5 from 'md5'
import { systemApi, userApi } from '@/api'
import { ElMessage } from 'element-plus'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/author'
import { getItem, removeAllItem, setItem } from '@/utils/storage'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: getItem('token') || <string>'',
            userInfo: <any>{}
        }
    },
    getters: {
        hasUserInfo(state) {
            console.log(123)
            return JSON.stringify(state.userInfo) !== '{}'
        }
    },
    actions: {
        // 保存 token
        setToken(newToken: string) {
            this.token = newToken
            setItem('token', newToken)
        },
        // 登录
        async login(query: any) {
            // 加密密码
            const { password } = query
            const data = await systemApi.login({
                ...query,
                password: password ? MD5(password) : ''
            })
            if (data.token) {
                // 保存token
                this.setToken(data.token)
                // 设置登录时间
                setTimeStamp()
                // 获取用户信息
                this.getProfile()
                ElMessage({
                    type: 'success',
                    message: '登录成功'
                })
            }
        },
        // 保存用户信息
        setUserInfo(newUserInfo: any) {
            this.userInfo = newUserInfo
            setItem('userInfo', newUserInfo)
        },
        // 获取用户信息
        async getProfile() {
            const data = await userApi.getProfile()
            this.setUserInfo(data)
            return data
        },
        // 退出登录
        logout() {
            resetRouter()
            this.setToken('')
            this.setUserInfo({})
            removeAllItem()
            router.push('/login')
        }
    }
})

export default useUserStore
