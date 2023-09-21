<template>
    <div class="vsinger">
        <h3>vsinger-hot：{{ hot }}</h3>
        打call：<input type="text" v-model="hot">
        <!-- 实现父子数据同步 -->
        <!-- 情形一 ：复杂同步代码 -->
        <!-- <LuoTianYi :modelValue="hot" @update:modelValue="handler"></LuoTianYi> -->
        <!-- 情形一 ：简略同步代码 -->
        <LuoTianYi v-model="hot"></LuoTianYi>
        <!-- 情形二 ：双向绑定多个数据 -->
        <YueZhengLing v-model:hot="hot" v-model:hobby="hobby"></YueZhengLing>
        <!-- 自定义修饰符 -->
        <!-- <input type="text" v-model.uppercase="message"> -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

let hot = ref(1000)
let hobby = ref('唱歌')
let message = ref('')

// const props = defineProps({
//     modelValue: String,
//     modelModifiers: { default: () => { } }
// })

// 自定义事件回调（接受子组件传递多来的数据）
const handler = (value) => {
    hot.value = value
}
</script>

<style scoped>
.vsinger {
    padding: 10px;
    background-color: #3f3f3f;
}
</style>