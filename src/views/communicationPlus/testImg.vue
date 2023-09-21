<template>
    <button v-if="!imgurl" @click="getImage">阿牛</button>
    <img @click="getImage" v-lazy="imgurl" alt="">
</template>
<script setup>
import { ref } from 'vue';
import { reqAnimatioPictures } from '@/api/index'

const imgurl = ref('');
const imgList = ref([]); // 使用 ref 包装数组
function getImage() {
    reqAnimatioPictures().then(res => {
        imgurl.value = res.data.imgurl
        imgList.value.push(res.data.imgurl);
    }).catch(error => {
        console.log(error)
    })

}

</script>
<style scoped>
.gobtn {
    padding: 20px;
    background-color: #0ee;
    margin: 0 10px;
    font-size: 18px;
}
</style>
