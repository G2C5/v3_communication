<template>
    <div class="yzl">
        <h4>姓名：{{ yzlInfo.singerName }}</h4>
        <h4>代表色：{{ yzlInfo.color }}</h4>
        <h4>热度：{{ yzlInfo.hot }}</h4>
        <!-- props：展示父组件传递数据 -->
        <h4>生日：{{ birthday }}</h4>
        <p>{{ title }}</p>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
const yzlInfo = reactive({ singerName: '乐正绫', color: '#EE0000', id: uuidv4(), hot: 412 })
// props：接收父组件数据
const props = defineProps(['birthday', 'title'])

</script>

<style  scoped>
.yzl {
    padding: 10px;
    background-color: #e88;
}
</style>