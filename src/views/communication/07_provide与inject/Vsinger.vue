<template>
    <div class="vsinger">
        <!-- 注入与提供 -->
        <h3>vsinger</h3>
        <p>热度：{{ hot }}</p>
        <!-- 简单注入与提供 -->
        <LuoTianYi></LuoTianYi>
        <!-- 注入与提供和修改 -->
        <YueZhengLing></YueZhengLing>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';
let info = ref('虚拟歌姬')
let hot = ref(412)
// 修改hot
const updateHot = (value) => {
    hot.value += value;
}

// 提供(注入名、值)
provide('info', info)
// 提供，包括修改数据方法(箭头函数要在这之前)
provide('hotUpdate', { updateHot, hot })




</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>