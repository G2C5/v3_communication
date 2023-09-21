<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click="singASong">唱首歌吧</button>
    </div>
</template>

<script setup>
import $bus from './bus';
// 触发事件
const singASong = () => {
    $bus.emit('sing', '世末...')
}

</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>