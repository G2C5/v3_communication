import { defineStore } from "pinia";

// 选项式写法

let singerInfoStore = defineStore('info', {
    state: () => {
        return {
            hot: 412
        }
    },
    actions: {
        updateHot(a, b) {
            this.hot = a + b
        }
    },
    getters: {

    }
})

export default singerInfoStore;