const order = {
	state: {
		// state
		count: 0
	},
	mutations: {
		// mutations
		ADD_COUNT: (state, payload) => {
			state.count += payload.amount;
		}
	},
	actions: {
		// actions
		addCount: ({commit}, payload) => {
			commit("ADD_COUNT", {
				amount: payload.num
			});
		}
	}
};

export default order;
