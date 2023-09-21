<template>
    <div class="lty">
        <h3>洛天依</h3>
    </div>
</template>

<script setup>
import { ref } from "vue";

let singerColor = ref('blue')

const sing = () => {
    console.log('唱首歌给你听！')
}
// 暴露数据或方法
defineExpose({
    singerColor,
    sing
})
</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>