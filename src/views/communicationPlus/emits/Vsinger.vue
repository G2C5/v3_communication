<template>
    <div class="box">
        <div class="vsinger">
            <h2>vsinger</h2>
            <p>子组件通知父组件触发一个事件，并且可以传值给父组件。</p>
            <p :class="{ active: yzlInfo }">来自乐正绫的信息：{{ yzlInfo }}</p>
        </div>
        <!-- 通过v-on绑定一个自定义事件 -->
        <YueZhengLing @sendVsingerInfo="getYZlInfo"></YueZhengLing>
        <LuoTianYi></LuoTianYi>
    </div>
</template>

<script setup>
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';
import { ref } from 'vue';
let yzlInfo = ref('')

let flag = ref(false)
let timmer = ref(0)
// 自定义事件回调
function getYZlInfo(value) {
    clearInterval(timmer.value); //清除之前的定时器
    timmer.value = 0
    yzlInfo.value = ''
    if (!timmer.value) {
        timmer.value = setInterval(() => {
            yzlInfo.value = value // 得到子组件传递的数据并展示
            clearInterval(timmer.value); //清除之前的定时器
            timmer.value = 0
        }, 1000)
    }
    console.log('来自乐正绫的信息：' + value)
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

.active {
    color: rgb(0, 140, 255);
}
</style>