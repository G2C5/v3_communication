import { defineStore } from "pinia";
import { computed, reactive } from "vue";


// 组合式写法

let singsInfoStore = defineStore('sings', () => {
    const singsInfo = reactive([
        {
            songName: '001',
            lyric: '小船儿荡起波澜'
        },
        {
            songName: '002',
            lyric: '轻轻敲醒沉睡的心灵'
        },
        {
            songName: '003',
            lyric: '什么妖魔鬼怪'
        },
    ])
    const pushSong = () => {
        singsInfo.push({ songName: '004', lyric: '那就是青藏高原~~' })
    }
    const songs = computed(() => {
        return singsInfo[0].songName + '--' + singsInfo[0].lyric
    })
    return {
        singsInfo,
        pushSong,
        songs
    }

})

export default singsInfoStore;