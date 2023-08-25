<template>
	<div class="container">
		<div class="task-list-button-filter">
			<el-button
				size="small"
				@click="setSelectedCategory('All')"
				class="btn-filter"
				:type="selectedCategory === 'All' ? 'success' : 'info'"
				plain
				>All</el-button
			>
			<el-button
				size="small"
				@click="setSelectedCategory('Done')"
				class="btn-filter"
				:type="selectedCategory === 'Done' ? 'success' : 'info'"
				plain
				>Completed tasks</el-button
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "FilterButtons",
	props: {
		selectedCategory: String,
	},
	data() {
		return {};
	},
	methods: {
		setSelectedCategory(category) {
			this.$emit("category-selected", category); // Відправляємо подію назад
		},
	},
};
</script>

<style scoped>
.task-list-button-filter{
  width: 100%;
	display: flex;
	justify-content: end;
}
</style>
