<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-09-14 20:53:52
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-09-14 21:45:09
 * @FilePath     : \web-B-tmp\src\views\home\components\titleText.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <div class="title flex items-center justify-center font-semibold"><slot /></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.title {
    font-size: 1.125rem;
    text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090,
        0px 5px 10px rgba(0, 0, 0, 0.6);
}
</style>
