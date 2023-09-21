$bus全局事件总线
npm 官网 安装mitt插件 npm install --save mitt
src/bus/index.js下：
    import mitt from 'mitt'
    import mitt from 'mitt';
    const $bus = mitt();
    export default $bus
