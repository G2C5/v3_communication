<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click="sendVSinger">@乐正绫</button>
    </div>
</template>

<script setup>
import bus from './bus'

function sendVSinger() {
    bus.emit('sendInfo', '我是洛天依')
}
</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>