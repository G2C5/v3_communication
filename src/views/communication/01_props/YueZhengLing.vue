<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <p>热度{{ hot }}，代表色：{{ info }}</p>
    </div>
</template>

<script setup>
// 接收props 
let props = defineProps(['hot', 'info'])

</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>