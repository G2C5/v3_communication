<template>
    <div class="box">
        <div class="vsinger">
            <h2>vsinger</h2>
            <p>①父组件传递数据给子组件；②父组件传递一个回调函数给子组件使用，得到子组调用并传递参数给父组件</p>
        </div>
        <!-- props：父组件传递数据 -->
        <YueZhengLing title="虚拟歌姬" :birthday="412"></YueZhengLing>
        <!-- props：接收子组件数据 -->
        <LuoTianYi v-bind:getLtyInfo="getLtyInfo"></LuoTianYi>
    </div>
</template>

<script setup>
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

function getLtyInfo(id) {
    console.log("收到来自洛天依的id：" + id)
}
</script>

<style  scoped>
.vsinger {
    padding: 10px;
    background-color: #8dffa0;
}

.box {
    padding: 10px;
    background-color: #666666;
}
</style>