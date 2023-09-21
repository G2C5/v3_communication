<template>
    <div class="lty">
        <h3>洛天依</h3>
        <h6 v-for="(info, index) in vsingerInfo" :key="index">
            <!-- 回传数据 -->
            <slot :row="info" :index="index"></slot>
        </h6>
    </div>
</template>

<script setup>
let info = defineProps(['vsingerInfo'])


</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>