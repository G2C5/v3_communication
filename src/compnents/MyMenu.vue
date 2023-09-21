<template>
    <!-- <el-menu :default-active="routes[0].path" router> -->
    <template v-for="(routeItem) in routes" :key="routeItem.path">
        <!-- 无子路由 -->
        <el-menu-item v-if="!routeItem.children && !routeItem.meta.hidden" :index="routeItem.path" @click="handleItme">
            <template #title>
                <el-icon>
                    <component :is="routeItem.meta.icon"></component>
                </el-icon>
                <span>{{ routeItem.meta.title }}</span>
            </template>
        </el-menu-item>
        <!-- 有子路由 -->
        <el-sub-menu v-if="routeItem.children && !routeItem.meta.hidden" :index="routeItem.path">
            <template #title>
                <el-icon>
                    <component :is="routeItem.meta.icon"></component>
                </el-icon>
                <span>{{ routeItem.meta.title }}</span>
            </template>
            <MyMenu :routes="routeItem.children"></MyMenu>
        </el-sub-menu>
    </template>
    <!-- </el-menu> -->
</template>

<script setup>

defineProps(['routes'])
function handleItme(vc) {

}
</script>


<style scoped>
.nav {
    width: 300px;
    height: 100vh;
    background-color: #e88;
    padding: 0;
    margin: 0;
}

/* 去除默认右白色1px边框 */
.el-menu {
    user-select: none;
    border: none;
}

.el-menu-item {
    user-select: none;
}

.is-opened .el-sub-menu__title span {
    color: rgb(212, 120, 120);
}

/*  */
.el-menu-item.is-active {
    background-color: #0ee;
}
</style>