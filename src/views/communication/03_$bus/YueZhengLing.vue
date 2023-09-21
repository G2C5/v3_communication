<template>
    <div class="yzl">
        <h3>乐正绫</h3>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import $bus from './bus';
//
onMounted(() => {
    // 挂载接收数据:$bus.on(事件类型，事件回调)
    $bus.on('sing', (song) => {
        console.log('sing a ' + song)
    })
})

</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>