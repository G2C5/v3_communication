<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <button @click="handler">@lty</button>
        <!-- ref 获取子组件的数据和方法 -->
        <LuoTianYi ref="lty"></LuoTianYi>
        <YueZhengLing></YueZhengLing>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import YueZhengLing from './YueZhengLing.vue';
import LuoTianYi from './LuoTianYi.vue';
// 必须属性名和ref绑定的一致
let lty = ref(null)
//
let vsinger = ref('洛天依')

const handler = () => {
    // ref获取子组件数据
    console.log(lty.value.singerColor);
    // ref获取子组件事件
    lty.value.sing();
}

// 暴露数据或方法
defineExpose({
    handler,
    vsinger
})
</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>