<template>
    <div class="vsinger">
        <h3>vsinger</h3>
        <!-- 作用域插槽,回传数据 -->
        <LuoTianYi :vsingerInfo="vsingerInfo">
            <template v-slot="{ row, index }">
                <p>{{ row }}--{{ index }}</p>
            </template>
        </LuoTianYi>
        <!-- 默认插槽 -->
        <YueZhengLing>
            <button>默认插槽按钮</button>
        </YueZhengLing>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LuoTianYi from './LuoTianYi.vue';
import YueZhengLing from './YueZhengLing.vue';

let vsingerInfo = ref([
    { singer: '洛天依', color: '蓝色' },
    { singer: '乐正绫', color: '红色' },
])

</script>

<style scoped>
.vsinger {
    padding: 10px;
    background: #3f3f3f;
}
</style>