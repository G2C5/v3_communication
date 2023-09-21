<template>
    <div class="lty">
        <h3>洛天依</h3>
        <h3>hot:{{ singerInfo.hot }}</h3>
        <button @click="handler">修改hot</button>
    </div>
</template>

<script setup>
// 选项式仓库
import singerInfoStore from '@/store/model/info';
// 获取小仓库数据
let singerInfo = singerInfoStore()

function handler() {
    // 打印仓库数据
    console.log(singerInfo.hot)
    // 1. 调用仓库方法修改数据
    // singerInfo.updateHot();

    // 2. 手动修改
    // singerInfo.hot++

    // 3. 仓库的方法修改
    // singerInfo.$patch({
    //     hot: 712
    // })

    // 4. 传递参数修改
    singerInfo.updateHot(1, 2);

}
</script>

<style scoped>
.lty {
    padding: 20px;
    background: #00eeee;
}
</style>