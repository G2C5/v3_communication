<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <button @click="handler">触发自定义事件</button>
    </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
// 接收自定义事件
// let props = defineProps(['xxx'])
const emit = defineEmits(['xxx'])


const handler = () => {
    emit('xxx', 412)
    // props.xxx('lalal')
}


</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>