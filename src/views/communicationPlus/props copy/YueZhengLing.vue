<template>
    <div class="yzl">
        <h4>姓名：{{ yzlInfo.singerName }}</h4>
        <h4>代表色：{{ yzlInfo.color }}</h4>
        <h4>热度：{{ yzlInfo.hot }}</h4>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import { v4 as uuidv4 } from 'uuid';
const yzlInfo = reactive({ singerName: '乐正绫', color: '#EE0000', id: uuidv4(), hot: 412 })


</script>

<style  scoped>
.yzl {
    padding: 10px;
    background-color: #e88;
}
</style>