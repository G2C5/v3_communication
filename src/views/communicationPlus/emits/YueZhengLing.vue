<template>
    <div class="yzl">
        <h4>姓名：{{ yzlInfo.singerName }}</h4>
        <h4>代表色：{{ yzlInfo.color }}</h4>
        <h4>热度：{{ yzlInfo.hot }}</h4>
        <!-- 触发父组件的自定义事件回调并传值 -->
        <button @click="sendInfo">自定义事件方式给父组件传值</button>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { v4 as uuidv4 } from 'uuid';
const yzlInfo = reactive({ singerName: '乐正绫', color: '#EE0000', id: uuidv4(), hot: 412 })
const emits = defineEmits(['sendVsingerInfo'])

function sendInfo() {
    emits('sendVsingerInfo', yzlInfo.singerName)
}
</script>

<style  scoped>
.yzl {
    padding: 10px;
    background-color: #e88;
}
</style>