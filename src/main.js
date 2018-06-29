import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
