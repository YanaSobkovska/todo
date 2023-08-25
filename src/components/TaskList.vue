<template>
	<div class="container">
		<FilterButtons
			:selectedCategory="selectedCategory"
			@category-selected="setSelectedCategory"
		/>
		<div  class="task-list">
			<div class="task-list-item" v-for="task in filteredList" :key="task.id">
				<div class="list-item-task">
					<h3 class="task-name">
						<template v-if="editTask.id === task.id">
							<input v-model="editTask.name" class="edit-input"
						/></template>
						<template v-else>{{ task.name }}</template>
					</h3>
					<p class="task-description">
						<template v-if="editTask.id === task.id">
							<textarea v-model="editTask.description" class="edit-textarea">
							</textarea>
						</template>
						<template v-else>{{ task.description }}</template>
					</p>
				</div>
				<div class="list-item-button">
					<el-button
						:title="message.done"
						@click="doneTask(task)"
						:type="checkTypeButton(task)"
						icon="el-icon-check"
						circle
					>
					</el-button>
					<el-button
						:title="message.edit"
						@click="toggleEditMode(task)"
						:type="editTask.id === task.id ? 'primary' : ''"
						:icon="editTask.id === task.id ? 'el-icon-check' : 'el-icon-edit'"
						circle
					>
					</el-button>
					<el-button
						:title="message.delete"
						@click="openDialog(task)"
						type="danger"
						icon="el-icon-delete"
						circle
					>
					</el-button>
				</div>
			</div>
		</div>
		<DeleteItemVue :deleteTask="deleteTask" v-model="dialogVisible" />
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import DeleteItemVue from "./DeleteItem.vue";
import FilterButtons from "./FilterButtons.vue";

export default {
	name: "TaskList",
	components: {
		DeleteItemVue,
		FilterButtons,
	},
	data() {
		return {
			selectedCategory: "All",
			dialogVisible: false,
			deleteTask: {},
			editTask: {},
			message: {
				done: "The task is completed",
				edit: "Edit the task",
				delete: "Delete a task",
			},
		};
	},
	computed: {
		...mapState(["taskList"]),
		filteredList() {
			if (this.selectedCategory === "All") {
				return this.taskList;
			} else if (this.selectedCategory === "Done") {
				return this.taskList.filter((task) => task.done);
			}
		},
	},
	methods: {
		...mapMutations(["DONE_TASK", "SAVE_EDITED_TASK"]),
		setSelectedCategory(category) {
			this.selectedCategory = category;
		},
		toggleEditMode(task) {
			if (this.editTask.id === task.id) {
				this.SAVE_EDITED_TASK(this.editTask);
				this.editTask = {};
			} else {
				this.editTask = { ...task };
			}
		},
		doneTask(task) {
			this.DONE_TASK(task);
		},
		checkTypeButton(task) {
			if (task.done === true) {
				return "success";
			} else {
				return "info";
			}
		},
		openDialog(task) {
			this.dialogVisible = true;
			this.deleteTask = task;
		},
	},
};
</script>

<style scoped>
.container {
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
}
.task-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.task-list-item {
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid rgb(218, 213, 213);
	box-shadow: 5px -5px 13px rgba(185, 178, 178, 0.466);
	padding: 10px 30px;
	box-sizing: border-box;
}
.list-item-button {
	display: flex;
	justify-content: flex-end;
}
.task-name {
	font-size: 24px;
	color: rgb(114, 115, 116);
	text-transform: uppercase;
}
.task-description {
	font-size: 16px;
	line-height: 28px;
}
.edit-input {
	width: 100%;
	font-size: 24px;
	color: rgb(114, 115, 116);
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 40px;
	text-transform: uppercase;
}
.edit-textarea {
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 5px;
	min-height: 60px;
	font-size: 16px;
}

@media (max-width: 425px) {
	.task-name,
	.edit-input {
		font-size: 16px;
	}
	.task-description,
	.edit-textarea {
		font-size: 14px;
	}
}
</style>
