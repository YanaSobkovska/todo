<template>
  <div class="container">
    <el-dialog :visible.sync="dialogVisible" width="50%">
      <span>You are sure that you want to delete the task?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button @click="deleteItem(deleteTask)" type="primary"
          >Yes</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'DeleteItem',
  props: {
    dialogVisible: Boolean,
    deleteTask: Object,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['DELETE_TASK']),
    deleteItem(task) {
      this.DELETE_TASK(task.id);
      closeDialog();
      this.dialogVisible = false;
    },
  },
};
</script>
