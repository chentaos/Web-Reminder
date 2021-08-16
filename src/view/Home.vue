<template>
  <AddTask v-if="showAddTask" @add-task="addTask" />
  <Tasks
    v-bind:tasks="tasks"
    @delete-task-level2="deleteTask"
    @toggle-reminder-level1="toggleReminder"
  />
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "home",
  components: {
    AddTask,
    Tasks,
  },
  props: {
    showAddTask: Boolean,
  },
  data() {
    return { tasks: [] };
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
  methods: {
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      this.tasks = await this.fetchTasks();
      // const data = await res.json();
      // this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (
        confirm(`This action will delete task ${id}, are you sure to proceed?`)
      ) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        });
        this.tasks = await this.fetchTasks("api/tasks");
        console.log(`task ${id} deleted`);
      }
    },

    async toggleReminder(id) {
      const task = await this.fetchTask(id);
      if (Object.keys(task).length === 0) {
        return;
      }
      const taskUpdated = { ...task, reminder: !task.reminder };
      // task.reminder = !task.reminder;

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(taskUpdated),
      });

      this.tasks = await this.fetchTasks();

      // this.tasks = this.tasks.map((task) =>
      //   task.id === id ? { ...task, reminder: !task.reminder } : task
      // );
    },

    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const data = await this.fetchTasks();
      const task = data.filter((task) => task.id === id);
      if (Object.keys(task).length === 0) {
        return task;
      } else {
        const res = await fetch(`api/tasks/${id}`);
        const data = await res.json();
        return data;
      }
    },
  },
};
</script>
