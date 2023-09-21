<template>
    <div class="test">
        <button @click="test">测试</button>
        <h3>{{ q.id }}-{{ q.quertion }}</h3>
        <div class="item">
            <h6 v-for="item in qq" :key="item.id">{{ item }}</h6>
        </div>
    </div>
</template>

<script  setup>
import { reqGetQuertions } from '@/api/index'
import { reactive, ref, onMounted } from 'vue'
let quertion = reactive([]);
let q = reactive({ // 当前题目
    id: 0,
    quertion: '等待测试中>>>>'
})
// 历史题目
let qq = reactive([])

function test() {
    let id = getRandom(0, 36);
    if (Array.isArray(quertion)) {
        quertion.some(function (value, index) {
            if (value.id == id) {
                q.id = value.id
                q.quertion = value.quertion
                qq.push(value)
            }
            return value.id == id;
        })
    }
}


//  返回[min,max]之间随机一个数
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// mock请求数据
async function getQuertions() {
    let result = await reqGetQuertions();
    quertion = result.data
}

onMounted(() => {
    getQuertions()
})
</script>

<style  scoped>
.syr {
    position: absolute;
    text-align: center;
    transform: (-50%, -50%);
}

.item {
    background-color: #232e50;
    height: 150px;
    overflow: scroll;
    /* text-overflow: ellipsis; */
    margin-top: 10px;
    color: rgb(145, 145, 83);
}
</style>