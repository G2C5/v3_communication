<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <!-- 子传父 -->
        <LuoTianYi></LuoTianYi>
        <!-- 父传子 -->
        <YueZhengLing></YueZhengLing>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let hot = ref(412)

</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>