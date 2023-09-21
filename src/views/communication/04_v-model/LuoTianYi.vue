<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click="handler">打call+100</button>
        <p>热度:{{ modelValue }}</p>
    </div>
</template>

<script setup lang="ts">
// 接收props
let props = defineProps(['modelValue'])
// 接收自定义事件
let $emit = defineEmits(['update:modelValue'])

// 触发父组件的自定义事件
const handler = () => {
    $emit('update:modelValue', props.modelValue + 100)
}

</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>