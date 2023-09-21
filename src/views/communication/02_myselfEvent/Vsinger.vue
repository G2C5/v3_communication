<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <button @click="handler1">原生事件1</button>
        <button @click="handler2(1, 2, 3, $event)">原生事件2</button>

        <!-- 自定义事件 -->
        <!-- 与vue2不同，vue3默认为原生dom点击事件 -->
        <LuoTianYi @click="hothadler"></LuoTianYi>
        <!-- 需要子组件接收自定义事件 -->
        <YueZhengLing @xxx="hothadler"></YueZhengLing>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

let hot = ref(412)
// 默认注入事件对象：鼠标点击位置，
const handler1 = (event) => {
    console.log('虚拟歌姬')
}
const handler2 = (a, b, c, $event) => {
    console.log(a, b, c, $event)
}
// 自定义事件回调
const hothadler = (value) => {
    console.log('洛天依', value)
}

</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>