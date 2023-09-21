<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <!-- 传递属性、事件 -->
        <LuoTianYi title="提示信息" type="primary" @click="handler"></LuoTianYi>
        <YueZhengLing></YueZhengLing>
    </div>
</template>

<script setup>
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

function handler() {
    alert('提示信息')
}

</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>