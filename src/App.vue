<template>
  <div id="app">
    <CreateTask />
    <TaskList />
  </div>
</template>

<script>
import CreateTask from '@/components/CreateTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'App',
  components: {
    CreateTask,
    TaskList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  overflow: hidden;
}
</style>
