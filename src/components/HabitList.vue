<template>
  <div class="habit-section">
    <h1>Habit</h1>

    <button type="button" class="btn" @click="createHabit">+</button>

    <div class="outer-habit-section-box">
      
    </div>
  </div>
</template>

<script>
// import * from '../Api';
// import Habit from '../models/habit'

export default {
  name: 'HabitList',
  methods: {
    createHabit() {
      // Api.createHabit();
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.habit-section {
  height: 600px;
  width: auto;
  position: relative
}

.outer-habit-section-box {
  height: 500px;
  border: 1px solid gray;
  border-radius: 2px;
}
</style>
