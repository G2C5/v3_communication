<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <!-- 获取父组件的数据 -->
        <button @click="handler($parent)">@vsinger</button>
    </div>
</template>

<script setup>
// $parent获取父组件的事件或数据
const handler = ($parent) => {
    $parent.handler()
    console.log($parent.vsinger)
}

</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>