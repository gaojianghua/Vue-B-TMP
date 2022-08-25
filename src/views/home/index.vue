<template>
    <div class="page">
        {{ $t('login.title') }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let text = '--primary:gaoprimary;'
text.replace(/gaoprimary/, " '#eeeeee'")
console.log(text)
</script>

<style lang="scss" scoped>
.page {
}
</style>
