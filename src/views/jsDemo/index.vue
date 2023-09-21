<template>
    <div>
        <div>数组方法</div>
        姓名：<input type="text" v-model="info.singerName"><br>
        颜色：<input type="text" v-model="info.color"><br>
        热度：<input type="text" v-model.number="info.hot"><br>
        <hr>
        <button @click="pushInfo">新增push</button>
        <button @click="unshifInfo">新增unshift</button>
        <button @click="changeSort">排序sort</button>
        <button @click="shifInfo">删除shift</button>
        <button @click="popInfo">删除pop</button>
        <button @click="quchong">去重hot</button>
        <button @click="vsingerArrToString">数组转变字符串</button>
        <button @click="vsingerObjToString">对象转变字符串</button>
        <button @click="showAll">showAll</button>
        <hr>
        <button @click="getSingerInfoByName">根据姓名搜索</button>
        <hr>
        <ul class="info">
            <li v-for="singer in vsingerSort" :key="singer.id">
                <div>
                    <p>{{ singer.singerName }}</p>
                    <p>{{ singer.color }}</p>
                    <p>{{ singer.hot }}</p>
                </div>
            </li>
        </ul>
        <hr>
        <h3>dd:{{ dd }}</h3>
        <hr>
        <router-link to="/array/testvue">问题</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { v4 as uuidv4 } from 'uuid';
let dd = ref('')
let info = reactive({
    singerName: 'name',
    color: 'color',
    hot: 0
})
let vsinger = reactive([
    { singerName: '乐正绫', color: '#EE0000', id: uuidv4(), hot: 412 },
    { singerName: '洛天依', color: '#66CCFF', id: uuidv4(), hot: 712 },
    { singerName: '乐正龙牙', color: '#00666666', id: uuidv4(), hot: 1012 },
    { singerName: '言和', color: '#00FFCC', id: uuidv4(), hot: 711 }
])
let isSort = ref(true)
// 末尾追加
const pushInfo = () => {
    const { singerName, color, hot } = info
    vsinger.push({ singerName, color, id: uuidv4(), hot })
}
// 前面追加
const unshifInfo = () => {
    const { singerName, color, hot } = info
    vsinger.unshift({ singerName, color, id: uuidv4(), hot })
}
// 排序小到大
const vsingerSort = computed(() => {
    if (vsinger) {
        if (isSort.value) {
            // 排序大到小（默认）
            return vsinger.sort((a, b) => a.hot - b.hot);
        } else {
            // 排序大到小
            return vsinger.sort((a, b) => b.hot - a.hot);
        }
    }
    return [];
})
// 切换排序
function changeSort() {
    isSort.value ? isSort.value = false : isSort.value = true
}
// 输出展示
const showAll = () => {
    dd.outerText = vsinger
    console.log(dd)
}
// 删除shif
function shifInfo() {
    vsinger.shift()
}
// 删除pop
function popInfo() {
    vsinger.pop()
}
// 去重
function quchong() {
    const newArr = {};
    if (vsinger) {
        const arr = vsinger.filter(obj => {
            if (!newArr[obj.hot]) {
                newArr[obj.hot] = true;
                return true
            } else
                return false
        })
        // vsinger = arr
        vsinger.splice(0, vsinger.length, ...arr);
    }
}
// 数组变为字符串
function vsingerArrToString() {
    dd.value = vsinger.toString();
}
// 对象变为字符串
function vsingerObjToString() {
    vsinger.forEach(element => {
        dd.value += JSON.stringify(element)
    });
}

</script>

<style scoped>
.info {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    color: #e88;
}

.info li {
    padding: 10px;
    background-color: #233;
    margin-left: 10px;
}
</style>