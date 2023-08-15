import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    taskList: [
      {
        name: 'lorem',
        description:
          'Lorem ipsum dolor sit amet consecteturadipisicing elit. Quos officiis itaque necessitatibus, illo totamullam eum harum quaerat eaque odio quod iste nostrum minima voluptas, commodi excepturi. Unde, sit ratione?',
        id: 1,
        done: false,
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_TASK(state, data) {
      state.taskList.push(data);
    },
    DELETE_TASK(state, id) {
      state.taskList = state.taskList.filter((item) => item.id === id);
    },
    DONE_TASK({ taskList }, task) {
      taskList.forEach((item) => {
        if (item.id === task.id) {
          item.done = !item.done;
        }
      });
    },
    SAVE_EDITED_TASK({ taskList }, editForm) {
     taskList.forEach(item => {
		if(item.id === editForm.id){
			item.name = editForm.name
			item.description = editForm.description
		}
	 })
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
