<template>
    <div class="">
        <el-card>
            <div class="text-right">
                <el-button type="primary" @click="onImportExcelClick">{{
                    $t('excel.importExcel')
                }}</el-button>
                <el-button type="success" @click="onExportExcelClick">{{
                    $t('excel.exportExcel')
                }}</el-button>
            </div>
        </el-card>
        <el-card class="mt-[20px]">
            <g-table
                :options="options"
                :data="staffListData"
                elementLoadingText="加载中..."
                elementLoadingBackground="rgba(0,0,0,.8)"
                :element-loading-svg="svg"
                element-loading-svg-view-box="-10, -10, 50, 50"
                pagination
                paginationAlign="center"
                stripe
                border
                :isLoading="isLoading"
                :total="total"
                :currentPage="query.current"
                :pageSize="query.pageSize"
                v-model:editRowIndex="editRowIndex"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            >
                <template #id="{ scope }">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
                <template #username="{ scope }">
                    {{ scope.row.username }}
                </template>
                <template #mobile="{ scope }">
                    {{ scope.row.mobile }}
                </template>
                <template #avatar="{ scope }">
                    <el-image
                        class="w-[60px] h-[60px] rounded-[50%]"
                        :z-index="999999999999"
                        :src="scope.row.avatar"
                        :preview-src-list="[scope.row.avatar]"
                    />
                </template>
                <template #role="{ scope }">
                    <div v-if="scope.row.role && scope.row.role.length > 0">
                        <el-tag class="mr-[6px]" v-for="it in scope.row.role" :key="it.id">
                            {{ it.title }}
                        </el-tag>
                    </div>
                    <div v-else>
                        <el-tag>
                            {{ $t('excel.defaultRole') }}
                        </el-tag>
                    </div>
                </template>
                <template #openTime="{ scope }">
                    {{ $filters.dateFilter(scope.row.openTime) }}
                </template>
                <template #action="{ scope }">
                    <el-button size="small" type="primary" @click="onShowInfo">{{
                        $t('excel.show')
                    }}</el-button>
                    <el-button size="small" type="info" @click="onShowRole">{{
                        $t('excel.showRole')
                    }}</el-button>
                    <el-button size="small" type="danger" @click="onRemoveUser(scope.row)">{{
                        $t('excel.remove')
                    }}</el-button>
                </template>
            </g-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onActivated } from 'vue'
import { userManageApi } from '@/api'
import { IList } from '@/types/staff'
import { watchSwitchLang } from '@/utils/routeI18n'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
const router = useRouter()

let options: any[] = [
    {
        prop: 'id',
        label: '序号',
        // width: '180',
        align: 'center',
        slot: 'id'
    },
    {
        prop: 'username',
        label: '姓名',
        // width: '180',
        align: 'center',
        slot: 'username',
        editable: true
    },
    {
        prop: 'mobile',
        label: '联系方式',
        align: 'center',
        slot: 'mobile',
        editable: true
    },
    {
        prop: 'avatar',
        label: '头像',
        align: 'center',
        slot: 'avatar'
    },
    {
        prop: 'role',
        label: '角色',
        align: 'center',
        slot: 'role'
    },
    {
        prop: 'openTime',
        label: '开通时间',
        align: 'center',
        slot: 'openTime'
    },
    {
        label: '操作',
        action: true,
        align: 'center'
    }
]
const query = ref<IList>({
    current: 1,
    pageSize: 10,
    name: ''
})
const isLoading = ref<boolean>(false)
const total = ref<number>(0)
const editRowIndex = ref<string>('')
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
 * 获取数据
 * */
const staffListData = ref([])
const getUserListData = async () => {
    isLoading.value = true
    const data = await userManageApi.getUserList({
        current: query.value.current,
        pageSize: query.value.pageSize
    })
    isLoading.value = false
    staffListData.value = data.rows
    total.value = data.total
}
// 列表 size 变化事件
const handleSizeChange = (val: number) => {
    query.value.pageSize = val
    getUserListData()
}
// 列表选中页变化事件
const handleCurrentChange = (val: number) => {
    query.value.current = val
    getUserListData()
}
// 导入按钮点击事件
const onImportExcelClick = () => {
    router.push('/user/import')
}
// 导出按钮点击事件
const onExportExcelClick = () => {}

// 查看用户信息
const onShowInfo = (info: any) => {}
// 查看用户角色
const onShowRole = (role: any) => {}
// 删除用户
const i18n = useI18n()
const onRemoveUser = (row: any) => {
    ElMessageBox.confirm(
        i18n.t('excel.dialogTitle1') + row.username + i18n.t('excel.dialogTitle2'),
        {
            type: 'warning'
        }
    )
        .then(async () => {
            await userManageApi.removeUser({ id: row.id })
            ElMessage.success(i18n.t('excel.removeSuccess'))
            getUserListData()
        })
        .catch(() => {})
}

onMounted(() => {
    getUserListData()
})
watchSwitchLang(getUserListData)
onActivated(getUserListData)
</script>

<style lang="scss" scoped></style>
