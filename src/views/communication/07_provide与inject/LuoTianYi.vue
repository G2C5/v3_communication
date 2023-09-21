<template>
    <div class="lty">
        <h3>洛天依</h3>
        <button @click="handler">infoFromInfosinger</button>
    </div>
</template>

<script setup>
import { inject } from "vue";

// 注入
const infoFromInfosinger = inject('info')

// 
function handler() {
    console.log(infoFromInfosinger.value)
}
</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>