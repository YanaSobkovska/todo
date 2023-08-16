<template>
	<div class="container">
		<h1>Todo List</h1>
		<el-form :model="form" :rules="rules" ref="ruleForm">
			<el-form-item label="Task name" prop="name">
				<el-input v-model="form.name" placeholder="Task name...."></el-input>
			</el-form-item>
			<el-form-item label="Task description" prop="description">
				<el-input
					type="textarea"
					v-model="form.description"
					placeholder="Task description...."
				></el-input>
			</el-form-item>
			<el-button @click="addTask" type="success">Add task</el-button>
		</el-form>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "CreateTask",
	data() {
		return {
			form: {
				name: "",
				description: "",
			},
			rules: {
				name: [
					{
						required: true,
						message: "Please input task name",
						trigger: "blur",
					},
				],
				description: [
					{
						required: true,
						message: "Please input task description",
						trigger: "blur",
					},
				],
			},
		};
	},
	methods: {
		...mapMutations(["ADD_TASK"]),
		addTask() {
			this.$refs.ruleForm.validate((valid) => {
				if (valid) {
					let newObj = { ...this.form, done: false, id: Math.random() };
					this.ADD_TASK(newObj);
					this.form = {};
				}
			});
		},
	},
};
</script>

<style scoped>
.container {
	max-width: 600px;
	height: auto;
	margin: 0 auto 40px;
	border: 1px solid rgb(218, 213, 213);
	padding: 20px;
	box-sizing: border-box;
}
h1 {
	font-family: sans-serif;
	font-size: 28px;
	font-weight: normal;
	color: rgb(114, 115, 116);
	width: 100%;
	border-bottom: 1px solid rgb(218, 213, 213);
}
</style>
