<template>
    <div>
        <el-card>
            <g-table
                :options="options"
                :data="permissionList"
                elementLoadingText="加载中..."
                elementLoadingBackground="rgba(0,0,0,.8)"
                :element-loading-svg="svg"
                element-loading-svg-view-box="-10, -10, 50, 50"
                row-key="id"
                default-expand-all
                :tree-props="{ children: 'children', hashChildren: 'hasChildren' }"
                stripe
                border
                :isLoading="isLoading"
            >
                <template #permissionName="{ scope }">
                    <span>{{ scope.row.permissionName }}</span>
                </template>
                <template #permissionMark="{ scope }">
                    <span>{{ scope.row.permissionMark }}</span>
                </template>
                <template #permissionDesc="{ scope }">
                    <span>{{ scope.row.permissionDesc }}</span>
                </template>
            </g-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userManageApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const isLoading = ref<boolean>(false)
let options = ref<any[]>([])
const initOptions = () => {
    options.value = [
        {
            prop: 'permissionName',
            label: i18n.t('permission.name'),
            align: 'left',
            slot: 'permissionName'
        },
        {
            prop: 'permissionMark',
            label: i18n.t('permission.mark'),
            align: 'left',
            slot: 'permissionMark'
        },
        {
            prop: 'permissionDesc',
            label: i18n.t('permission.desc'),
            align: 'left',
            slot: 'permissionDesc'
        }
    ]
}
initOptions()
const svg = `
        <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
            " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
/**
 * 获取权限列表数据
 * */
const permissionList = ref<any[]>([])
const getPermissionList = async () => {
    permissionList.value = await userManageApi.getPermissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList, initOptions)
</script>

<style lang="scss" scoped>
.page {
}
</style>
