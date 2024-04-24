// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
import {
	$http
} from "@escook/request-miniprogram"

uni.$http = $http

//请求拦截器
$http.beforeRequest = function(option) {
	uni.showLoading({
		title: '数据加载中。。。',
	})
}

//相应拦截器
$http.afterRequest = function(option) {
	uni.hideLoading()
}

$http.baseUrl = "https://api-hmugo-web.itheima.net"
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif