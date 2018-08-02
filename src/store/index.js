import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import login from "./modules/login";
import mine from "./modules/mine";
import order from "./modules/order";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home,
		login,
		order,
		mine
	},
	getters
});
