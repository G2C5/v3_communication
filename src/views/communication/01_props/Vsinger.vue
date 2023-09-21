<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <!--  子组件props接收的数据只读 -->
        <!-- 子传父 -->
        <LuoTianYi :getLTYInfo="getLTYInfo"></LuoTianYi>
        <!-- 父传子 -->
        <YueZhengLing :hot="hot" info="红色"></YueZhengLing>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

let hot = ref(412)

function getLTYInfo(info) {
    console.log(info)
}
</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>