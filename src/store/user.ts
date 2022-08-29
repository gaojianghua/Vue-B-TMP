import { defineStore } from 'pinia'
import MD5 from 'md5'
import { systemApi, userApi } from '@/api'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { setTimeStamp } from '@/utils/author'
import { removeAllItem } from '@/utils/storage'

const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: <string>'',
            userInfo: <any>{}
        }
    },
    actions: {
        // 保存 token
        setToken(newToken: string) {
            this.token = newToken
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
        },
        // 获取用户信息
        async getProfile() {
            const data = await userApi.getProfile()
            this.setUserInfo(data)
        },
        // 退出登录
        logout() {
            this.setToken('')
            this.setUserInfo({})
            removeAllItem()
            router.push('/login')
        }
    },
    persist: {
        key: 'user',
        storage: window.localStorage,
        paths: ['token', 'userInfo'],
        beforeRestore: (context) => {
            //console.log('Before hydration...:' + context)
        },
        afterRestore: (context) => {
            //console.log('After hydration...:' + context)
        }
    }
})

export default useUserStore
