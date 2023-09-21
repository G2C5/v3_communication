<template>
    <div class="box">
        <div class="vsinger">
            <h2>vsiger</h2>
        </div>
        <YueZhengLing></YueZhengLing>
        <LuoTianYi></LuoTianYi>
    </div>
</template>

<script setup>
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';


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