<template>
  <div class="container">
    <div class="task-list-button-filter">
      <el-button
        size="small"
        @click="setSelectedCategory('All')"
        class="btn-filter"
        type="success"
        plain
        >All</el-button
      >
      <el-button
        size="small"
        @click="setSelectedCategory('Done')"
        class="btn-filter"
        type="success"
        plain
        >Completed tasks</el-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>
