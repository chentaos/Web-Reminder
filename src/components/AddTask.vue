<template>
  <form @submit="OnSubmit" class="add-form">
    <div class="form-control">
      <div><label for="task">Task</label></div>
      <input type="text" id="task" v-model="task" placeholder="New Task" />
    </div>
    <div class="form-control">
      <label for="time">Day & Time</label>
      <input
        type="text"
        id="time"
        v-model="time"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Reminder</label>
      <div>
        <input type="checkbox" id="reminder" v-model="reminder" />
      </div>
    </div>
    <div class="btn-align">
      <input type="submit" value="Save Task" class="btn btn-block" />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: "",
      time: "",
      reminder: false,
    };
  },
  methods: {
    OnSubmit(e) {
      e.preventDefault();

      if (!this.task) {
        alert("Please add a task");
        return;
      } else if (!this.time) {
        alert("Please add a date");
        return;
      }

      const newTask = {
        text: this.task,
        day: this.time,
        reminder: this.reminder,
      };
      this.$emit("add-task", newTask);

      this.task = "";
      this.time = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: underline;
}

.btn-block {
  display: inline-block;
  width: 90%;
}

.btn-align {
  text-align: center;
}

.add-form {
  font-family: "Poppins", sans-serif;
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  font-size: 17px;
  padding-left: 10px;
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Check {
}

/* .form-control-check label {
  flex: 2;
} */

.form-control-check input {
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
