<template>
  <header>
    <h1>{{ title }}</h1>
    <div>
      <Button
        v-show="homePage"
        v-bind:toggle="toggle"
        v-bind:text="toggle ? 'Close' : 'Add Task'"
        v-bind:color="toggle ? 'red' : 'green'"
        @btn-click="toggleAddTaskForm()"
      ></Button>
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Hello World",
    },
    toggle: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Button,
  },
  methods: {
    toggleAddTaskForm() {
      this.$emit("toggle-add-task-form");
    },
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
