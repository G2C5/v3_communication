<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <p>热度:{{ hot }}，爱好：{{ hobby }}</p>
        <button @click="hobbyhandler">爱好是：弹吉他</button>
        <button @click="hothandler">打call+100</button>
    </div>
</template>

<script setup>
// 接受props
let props = defineProps(['hot', 'hobby'])
// 接收自定义事件
let $emit = defineEmits(['update:hot', 'update:hobby'])
// 触发父组件自定义事件并传值
const hobbyhandler = () => {
    $emit('update:hobby', '弹吉他')
}
const hothandler = () => {
    $emit('update:hot', props.hot + 100)
}
</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>