import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name: "oldName"
	},
	mutations: {
		updateName(state) {
			state.name = "newName";
		}
	}
});
