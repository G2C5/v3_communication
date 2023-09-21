<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click.stop="hhh1">哈哈哈1</button>
        <button @click="hhh2">哈哈哈2</button>
        <button @click="hhh3">哈哈哈3</button>
        <!-- 自定义事件：兄弟组件通信 -->
        <button @click="sendYZl">给乐正绫</button>
    </div>
</template>

<script setup>
// 禁止透传
defineOptions({
    inheritAttrs: false
})
const emit = defineEmits(['message']);

function hhh1() {
    console.log('hhh1')
}
function hhh2() {
    console.log('hhh2')
}
function hhh3() {
    console.log('hhh3')
}

function sendYZl() {
    emit('message', hhh3)
}

</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>