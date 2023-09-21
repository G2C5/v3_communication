<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <button @click="handler">update-vsinger-hot</button>
    </div>
</template>

<script setup>
import { inject } from "vue";

// 注入
const { updateHot, hot } = inject('hotUpdate')
function handler() {
    // 获取数据
    console.log(hot.value)
    // 获取方法
    updateHot(1)

}
</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>