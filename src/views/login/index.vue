<template>
    <div class="login-container flex items-center justify-center">
        <el-form class="login-form" ref="ruleFormRef" :model="form" :rules="rules">
            <!-- <div class="logo flex justify-center items-center mb-8">
                <img src="@/assets/images/logo.png" alt="" />
            </div> -->
            <div class="form-box">
                <div class="flex mb-[18px]">
                    <span class="text-[18px] font-bold">用户登录</span>
                    <lang-select
                        class="w-[20px] h-[20px] ml-auto border-none bg-white rounded cursor-pointer p-[4px]"
                    ></lang-select>
                </div>

                <el-form-item prop="username">
                    <el-input
                        v-model="form.username"
                        :placeholder="i18n.t('login.username')"
                        prefix-icon="UserFilled"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="form.password"
                        type="password"
                        :placeholder="i18n.t('login.password')"
                        prefix-icon="Lock"
                        show-password
                        @keyup.enter="onLogin(ruleFormRef)"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button
                        :loading="loading"
                        size="large"
                        class="w-full"
                        type="primary"
                        @click="onLogin(ruleFormRef)"
                        >{{ $t('login.loginBtn') }}</el-button
                    >
                </el-form-item>
            </div>
            <!-- <div class="text-white" v-html="$t('login.desc')"></div> -->
        </el-form>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/store'
import { ElMessage, FormInstance } from 'element-plus'
import { ref } from 'vue'
import { validatePassword } from './rules'
import { SLogin } from '@/types/system'
import router from '@/router'
import { useI18n } from 'vue-i18n'

const ruleFormRef = ref<FormInstance>()
const loading = ref<boolean>(false)
// 数据源
const form = ref<SLogin>({
    username: 'admin',
    password: '123456'
})
// 验证规则
const i18n = useI18n()
const rules = ref({
    username: [
        {
            required: true,
            trigger: 'blur',
            message: () => i18n.t('login.usernameRule')
        }
    ],
    password: [
        {
            required: true,
            trigger: 'blur',
            validator: validatePassword()
        }
    ]
})
/**
 * 点击登录事件
 */
const onLogin = async (formEl: FormInstance | undefined) => {
    loading.value = true
    if (!formEl) return
    await formEl.validate((valid: boolean) => {
        if (valid) {
            useStore()
                .user.login(form.value)
                .then(() => {
                    router.push('/')
                    loading.value = false
                })
                .catch((err) => {
                    console.log(err)
                    loading.value = false
                })
        } else {
            ElMessage({
                type: 'warning',
                message: '登录校验失败!'
            })
        }
    })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #333;
$cursor: #fff;
.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;
    background-image: url('https://official-document.oss-cn-hangzhou.aliyuncs.com/141b53c86d1f6dc174982e6f122dcbfc.jpg');
    background-image: 100% 100%;
    .login-form {
        width: 380px;
        max-width: 100%;
        :deep(.el-form-item) {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
            .el-input__wrapper {
                background: transparent !important;
                .el-input {
                    background: transparent !important;
                }
            }
        }
        :deep(.el-input) {
            height: 40px;
            .el-input__inner {
                height: 38px;
                background: transparent !important;
                border: none;
                border-radius: 0px;
                color: $light_gray;
                caret-color: $cursor;
            }
        }
        .logo {
            border-radius: 5px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            box-shadow: 0 0 10px #333;
        }
        .form-box {
            border-radius: 5px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(15px);
            box-shadow: 0 0 10px #fff;
        }
    }
}
</style>
