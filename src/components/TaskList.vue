<template>
  <div class="container">
    <div class="task-list">
      <div class="list-item" v-for="(task, index) in taskList" :key="index">
        <div class="list-item-task">
          <h3 class="task-name">
            <template v-if="editModeTaskId === task.id">
              <input v-model="task.name" class="edit-input"
            /></template>
            <template v-else>{{ task.name }}</template>
          </h3>
          <p class="task-description">
            <template v-if="editModeTaskId === task.id">
              <textarea
                v-model="task.description"
                class="edit-textarea"
              ></textarea>
            </template>
            <template v-else>{{ task.description }}</template>
          </p>
        </div>
        <div class="list-item-button">
          <el-button
            @click="doneTask(task)"
            :type="checkTypeButton(task)"
            icon="el-icon-check"
            circle
          ></el-button>
          <el-button
            @click="toggleEditMode(task.id)"
            :type="editModeTaskId === task.id ? 'primary' : ''"
            :icon="
              editModeTaskId === task.id ? 'el-icon-check' : 'el-icon-edit'
            "
            circle
          ></el-button>
          <el-button
            @click="dialogVisible = true"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </div>
        <el-dialog :visible.sync="dialogVisible" width="30%">
          <span>You are sure that you want to delete the task</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="deleteItem(task.id)"
              >Yes</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  name: 'TaskList',
  data() {
    return {
      dialogVisible: false,
      editModeTaskId: null,
      editModeTaskName: '',
      editModeTaskDescription: '',
    };
  },
  computed: {
    ...mapState(['taskList']),
  },
  methods: {
    ...mapMutations(['DELETE_TASK', 'DONE_TASK']),
    toggleEditMode(taskId) {
      if (this.editModeTaskId === taskId) {
        this.editModeTaskId = null;
      } else {
        this.editModeTaskId = taskId;
      }
    },
    doneTask(task) {
      this.DONE_TASK(task);
    },
    checkTypeButton(task) {
      if (task.done === true) {
        return 'success';
      } else {
        return 'info';
      }
    },
    deleteItem(id) {
      this.DELETE_TASK(id);
      this.dialogVisible = false;
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
.list-item {
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
  min-height: 100px;
  font-size: 16px;
}
</style>
