import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export default {
//     state: { ... },
//     getters: { ... },
//     mutations: { ... },
//     actions: { ... }
// 	//actions 的参数是 store 对象,而 getters 和 mutations 的参数是 state .
// 	//actions 和 mutations 还可以传第二个参数,具体看vuex官方文档
// 	//getters/mutations/actions 都有对应的map,如: mapGetters , 具体看vuex官方文档
// 	//模块内部如果怕有命名冲突的话,可以使用命名空间, 具体看vuex官方文档
// 	//vuex 其实跟 vue 非常像,有data(state),methods(mutations,actions),computed(getters),还能模块化
// }

export default new Vuex.Store({
	//actions 的参数是 store 对象,而 getters 和 mutations 的参数是 state .
	//actions 和 mutations 还可以传第二个参数,具体看vuex官方文档
	//getters/mutations/actions 都有对应的map,如: mapGetters , 具体看vuex官方文档
	//模块内部如果怕有命名冲突的话,可以使用命名空间, 具体看vuex官方文档
	//vuex 其实跟 vue 非常像,有data(state),methods(mutations,actions),computed(getters),还能模块化
	state: {
		name: "123456"
	},
	getters: {
		//会缓存结果数据, 只有当依赖改变的时候,才要重新计算.
		getReverseName: state => {
			return state.name
				.split("")
				.reverse()
				.join("");
		}
	},
	mutations: {
		updateName(state) {
			state.name = "654321";
		}
	},
	actions: {
		updateNameAsync({commit}) {
			console.log(commit, "commit===");
			setTimeout(() => {
				commit("updateName");
			});
		}
	}
});
