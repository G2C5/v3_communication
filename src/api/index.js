import requests from './axios'
import mockRequests from './mockAjax'
// test
export const reqAnimatioPictures = () => requests({ url: '/imgapi/random.php?return=json', method: 'get' })
// // 三级导航数据
// export const reqGetCategoryList = () => {
//     return requests({ url: '/api/api/product/getBaseCategoryList', method: 'get' });
// }

// mock 
export const reqGetQuertions = () => {
    return mockRequests({ url: '/quertion', method: 'get', })
}
