<template>
    <div class="lty">
        <h4>姓名：{{ ltyInfo.singerName }}</h4>
        <h4>代表色：{{ ltyInfo.color }}</h4>
        <h4>热度：{{ ltyInfo.hot }}</h4>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
const ltyInfo = reactive({ singerName: '洛天依', color: '#66CCFF', id: uuidv4(), hot: 712 })


</script>

<style  scoped>
.lty {
    padding: 10px;
    background-color: skyblue;
}
</style>