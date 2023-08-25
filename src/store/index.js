import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		taskList: [],
	},
	getters: {},
	mutations: {
		ADD_TASK({taskList}, newObj) {
			taskList.push(newObj);
		},
		DELETE_TASK(state,taskId) {
      state.taskList = state.taskList.filter(item => {
        return item.id !== taskId
      })
		},
		DONE_TASK({ taskList }, task) {
			taskList.forEach((item) => {
				if (item.id === task.id) {
					item.done = !item.done;
				}
			});
		},
		SAVE_EDITED_TASK({ taskList }, editForm) {
			taskList.forEach((item) => {
				if (item.id === editForm.id) {
					item.name = editForm.name;
					item.description = editForm.description;
				}
			});
		},
	},
	actions: {},
	modules: {},
	plugins: [createPersistedState()],
});
