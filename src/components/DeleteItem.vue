<template>
	<div class="container">
		<el-dialog
			class="custom-text-style"
			v-model="localDialogVisible"
			:visible.sync="localDialogVisible"
			width="50%"
		>
			<span>You are sure that you want to delete the task?</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="localDialogVisible = false" size="small"
					>Cancel</el-button
				>
				<el-button @click="deleteItem(deleteTask)" type="primary" size="small"
					>Yes</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "DeleteItem",
	props: {
		value: Boolean,
		deleteTask: Object,
	},
	data() {
		return {};
	},
	computed: {
		localDialogVisible: {
			get() {
				return this.value;
			},
			set(newValue) {
				this.$emit("input", newValue);
			},
		},
	},
	methods: {
		...mapMutations(["DELETE_TASK"]),
		deleteItem(task) {
			this.DELETE_TASK(task.id);
			this.localDialogVisible = false;
		},
	},
};
</script>

<style scoped>
</style>
