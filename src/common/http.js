import axios from 'axios';
import router from '@/router/index.js';
import { Message, Loading } from 'element-ui';
const ERR_OK = 1000000;
const instance = axios.create({
    baseURL: WEBPACK_AJAX_BASE_URL,
    timeout: 30000,
    withCredentials: true
});

let loading; //定义loading变量

function startLoading() { //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '加载中……',
    })
}

function endLoading() { //使用Element loading-close 方法
    loading.close()
}
/* 声明一个变量needLoadingRequestCount，
   每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
   调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。
   needLoadingRequestCount为 0 时，结束 loading。
 */
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

instance.interceptors.request.use((config) => {
    showFullScreenLoading();
    return config
}, (error) => {
    tryHideFullScreenLoading();
    return Promise.reject(error)
})
// 拦截器
instance.interceptors.response.use((response) => {
    tryHideFullScreenLoading();
    return response;
}, (error) => {

    if (error.response && error.response.status == 401) {
        let urlName = router.app.$route.name;
        //跳转到登录页
        // router.push({ name: 'login', query: { redirectUrlName: urlName } });
    }

    tryHideFullScreenLoading();
    if (error.response)
        return Promise.reject(error.response.data)
    else
        return Promise.reject({ message: "请求超时" })
});

export function myGet(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
                params: params
            })
            .then(response => {
                response.data.code === ERR_OK ? resolve(response.data.data) : reject(response.data);
            }, err => {
                //reject(err)
                Message(err.message)
            }).catch(err => {
                reject(err)
            })
    })
}

export function myPost(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            response.data.code === ERR_OK ? resolve(response.data) : reject(response.data);
        }, err => {
            //reject(err)
            Message(err.message)
        })
    })
}

export function myPut(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.put(url, data).then(response => {
            response.data.code === ERR_OK ? resolve(response.data) : reject(response.data);
        }, err => {
            //reject(err)
            Message(err.message)
        })
    })
}
export function myDelete(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.delete(url, data).then(response => {
            response.data.code === ERR_OK ? resolve(response.data) : reject(response.data);
        }, err => {
            //reject(err)
            Message(err.message)
        })
    })
}