<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click="sendVSinger">给vsinger我的信息</button>
    </div>
</template>

<script setup>
let props = defineProps(['getLTYInfo'])
function sendVSinger() {
    props.getLTYInfo('lty信息')
}
</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>