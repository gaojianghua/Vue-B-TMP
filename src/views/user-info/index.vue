<template>
    <div>
        <el-card>
            <div class="text-right">
                <el-button type="primary" :loading="loading" v-print="printObj">{{
                    $t('userInfo.print')
                }}</el-button>
            </div>
        </el-card>
        <el-card class="mt-[20px]">
            <div class="box" id="userInfoBox">
                <!-- 标题 -->
                <h2 class="flex items-center justify-center mb-[20px] font-semibold">
                    {{ $t('userInfo.title') }}
                </h2>
                <!-- 头部 -->
                <div class="header">
                    <!-- 头部表格 -->
                    <el-descriptions :column="2" border>
                        <el-descriptions-item :label="$t('userInfo.name')">
                            {{ data.username }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.sex')">
                            {{ data.gender }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.nation')">
                            {{ data.nationality }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.mobile')">
                            {{ data.mobile }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.province')">
                            {{ data.province }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.date')">
                            {{ $filters.dateFilter(data.openTime) }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.remark')" :span="2">
                            <el-tag class="mr-2" v-for="(item, i) in data.remark" :key="i">
                                {{ item }}
                            </el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.address')" :span="2">
                            {{ data.address }}
                        </el-descriptions-item>
                    </el-descriptions>
                    <!-- 头像 -->
                    <el-image
                        class="w-[187px] border border-solid border-[#ebeef5] border-l-[none]"
                        :src="data.avatar"
                        :lazy="true"
                    ></el-image>
                </div>
                <!-- 内容 -->
                <div>
                    <el-descriptions direction="vertical" :column="1" border>
                        <el-descriptions-item :label="$t('userInfo.experience')">
                            <ul>
                                <li v-for="(item, i) in data.experience" :key="i">
                                    <span class="mr-[60px]">
                                        {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                                        ----
                                        {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}
                                    </span>
                                    <span class="mr-[60px]">
                                        {{ item.title }}
                                    </span>
                                    <span>
                                        {{ item.desc }}
                                    </span>
                                </li>
                            </ul>
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.major')">
                            {{ data.major }}
                        </el-descriptions-item>
                        <el-descriptions-item :label="$t('userInfo.glory')">
                            {{ data.glory }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
                <!-- 尾部 -->
                <div class="text-right mt-[40px]">{{ $t('userInfo.foot') }}</div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userManageApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
// 获取用户详情数据
const data = ref<any>({})
const getUserDetail = async () => {
    data.value = await userManageApi.getUserDetail(props.id)
    console.log(data.value)
}
getUserDetail()
watchSwitchLang(getUserDetail)

// 打印
const loading = ref<boolean>(false)
const printObj = {
    // 打印区域
    id: 'userInfoBox',
    // 打印标题
    popTitle: '员工信息',
    // 打印前
    beforeOpenCallback() {
        loading.value = true
    },
    // 执行打印
    openCallback() {
        loading.value = false
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    :deep(.el-descriptions) {
        flex-grow: 1;
    }
}
</style>
