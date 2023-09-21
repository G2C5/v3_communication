<template>
    <!-- 二次封装 -->
    <el-button :="attrs">洛天依提示按钮</el-button>
</template>

<script setup>
import { useAttrs } from "vue";
// 返回一个对象，包含父组件传递的事件、数据(如果props接收就无效)
let attrs = useAttrs();
console.log('attrs', attrs)
</script>

<style scoped></style>