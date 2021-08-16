<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      @delete-task-level1="$emit('delete-task-level2', task.id)"
      @click="toggleReminder(task.id)"
      v-bind:task="task"
    />
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  methods: {
    toggleReminder(id) {
      this.$emit("toggle-reminder-level1", id);
    },
  },
  emits: ["delete-task-level2", "toggle-reminder-level1"],
};
</script>
