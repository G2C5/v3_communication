<template>
    <div class="lty">
        <h4>姓名：{{ ltyInfo.singerName }}</h4>
        <h4>代表色：{{ ltyInfo.color }}</h4>
        <h4>热度：{{ ltyInfo.hot }}</h4>
        <button @click="sendVsingerInfo">给vsinger的信息</button>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
const ltyInfo = reactive({ singerName: '洛天依', color: '#66CCFF', id: uuidv4(), hot: 712 })
// 接收父组件v-bind:绑定的回调
const props = defineProps(['getLtyInfo'])
// 触发父组件回调并传参
function sendVsingerInfo() {
    props.getLtyInfo(ltyInfo.id)
}
</script>

<style  scoped>
.lty {
    padding: 10px;
    background-color: skyblue;
}
</style>