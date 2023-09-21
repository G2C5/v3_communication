<template>
    <div class="yzl">
        <h3>乐正绫</h3>
        <!-- 仓库的方法 -->
        <button @click="handler">push</button>
        <!-- 仓库的数据 -->
        <h6 v-for="(sing, index) in sinsInfo.singsInfo" :key="index">
            {{ sing.songName }}--{{ sing.lyric }}
        </h6>
        <!-- 仓库的计算属性 -->
        <h6>{{ sinsInfo.songs }}</h6>

    </div>
</template>

<script setup>
import singsInfoStore from '@/store/model/sings';
// 组合式仓库
let sinsInfo = singsInfoStore();
console.log(sinsInfo.songs)
//
function handler() {
    sinsInfo.pushSong()
}

</script>

<style scoped>
.yzl {
    padding: 20px;
    background: #ee4120;
}
</style>