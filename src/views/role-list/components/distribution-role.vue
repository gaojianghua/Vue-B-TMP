<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-01 04:31:43
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-01 07:59:11
 * @FilePath     : \web-B-tmp\src\views\role-list\components\distribution-role.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <el-dialog :title="$t('excel.roleDialogTitle')" :model-value="modelValue" @close="onClose">
        <el-tree
            ref="tree"
            :data="allPermission"
            :props="defaultProps"
            node-key="id"
            show-checkbox
            check-strictly
            default-expand-all
        >
        </el-tree>

        <template #footer>
            <div>
                <el-button @click="onClose">{{ $t('universal.cancel') }}</el-button>
                <el-button type="primary" @click="onConfirm">{{
                    $t('universal.confirm')
                }}</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { PropType, ref, watch } from 'vue'
import { userManageApi } from '@/api'
import { watchSwitchLang } from '@/utils/routeI18n'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    roleId: {
        type: String as PropType<string>,
        required: true
    }
})
const emits = defineEmits(['update:modelValue'])

// 获取所有权限
const allPermission = ref<any[]>([])
const getPermissionList = async () => {
    allPermission.value = await userManageApi.getPermissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)

// 关闭事件
const onClose = () => {
    emits('update:modelValue', false)
}
// 确定事件
const onConfirm = async () => {
    await userManageApi.updateRolePermission({
        roleId: props.roleId,
        permissions: tree.value.getCheckedKeys()
    })
    ElMessage.success(i18n.t('role.updateRoleSuccess'))
    onClose()
}
// ref
const tree = ref()
// 属性配置
const defaultProps = {
    chilren: 'children',
    label: 'permissionName'
}
// 获取当前角色的权限
const getRoleInPermission = async (id: string) => {
    const keys = await userManageApi.getRoleInPermission(id)
    tree.value.setCheckedKeys(keys)
}
watch(() => props.roleId, getRoleInPermission)
</script>

<style lang="scss" scoped></style>
