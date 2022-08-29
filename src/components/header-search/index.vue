<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-26 09:20:53
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 07:03:09
 * @FilePath     : \web-B-tmp\src\components\header-search\index.vue
 * @Description  :
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="flex items-center" :class="{ show: isShow }">
        <g-svg-icon
            id="guide-search"
            class="cursor-pointer text-[18px] w-[26px] h-[26px] mr-2"
            name="search"
            @click.stop="onShowClick"
        ></g-svg-icon>
        <el-select
            ref="headerSearchRef"
            v-model="search"
            :placeholder="$t('navBar.headerSearch')"
            clearable
            filterable
            remote
            default-first-option
            :remote-method="querySearch"
            @change="onSelectChange"
            class="select"
        >
            <el-option
                v-for="option in searchOptins"
                :key="option.item.path"
                :label="option.item.title.join(' > ')"
                :value="option.item.path"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { filterRoutes } from '@/utils/route'
import { useRouter } from 'vue-router'
import { generateRoutes } from '@/utils/fuseData'
import { watchSwitchLang } from '@/utils/routeI18n'
const router = useRouter()
import Fuse from 'fuse.js'

// 控制search展示
const isShow = ref<boolean>(false)
// search
const search = ref<string>('')
// 数据源
let options = computed(() => {
    const routes = filterRoutes(router.getRoutes())
    return generateRoutes(routes)
})
// 模糊查询
let fuse: any
const initFuse = (options: any) => {
    fuse = new Fuse(options, {
        // 是否按优先级排序
        shouldSort: true,
        // 匹配长度超过这个值的才会匹配
        minMatchCharLength: 1,
        /**
         * name 搜索的键
         * weight 对应的权重
         * */
        keys: [
            {
                name: 'title',
                weight: 0.7
            },
            {
                name: 'path',
                weight: 0.3
            }
        ]
    })
}
initFuse(options.value)

// 展示的点击事件
const onShowClick = () => {
    isShow.value = !isShow.value
}

//监听 isShow
watch(isShow, (val: boolean) => {
    if (val) {
        headerSearchRef.value.focus()
        document.body.addEventListener('click', onClose)
    } else {
        document.body.removeEventListener('click', onClose)
    }
})
// 关闭事件
const headerSearchRef = ref()
const onClose = () => {
    headerSearchRef.value.blur()
    isShow.value = false
    searchOptins.value = []
}

// 搜索方法
const searchOptins = ref<any[]>([])
const querySearch = (query: string) => {
    if (query !== '') {
        searchOptins.value = fuse.search(query)
    } else {
        searchOptins.value = []
    }
    console.log(fuse.search(query))
}
// 选中option的回调
const onSelectChange = (path: string) => {
    router.push(path)
}
watchSwitchLang(() => {
    options = computed(() => {
        const routes = filterRoutes(router.getRoutes())
        return generateRoutes(routes)
    })
    initFuse(options.value)
})
</script>

<style lang="scss" scoped>
.el-select {
    font-size: 18px;
    transition: width 0.4s;
    width: 0;
    padding: 0;
    // margin-left: 10px;
    background: transparent;
    display: inline-block !important;
    :deep(.el-input__wrapper) {
        padding: 0 !important;
    }
}

.show {
    .el-select {
        width: 210px;

        :deep(.el-input__wrapper) {
            padding: 1px 11px !important;
        }
    }
}
</style>
