<template>
  <div class="habit-section">
    <div id="wrapper">
      <div id="left-side-wrapper">
        <h1>Habit</h1>
      </div>
      <div id="right-side-wrapper">
        <button type="button" class="round-btn" data-toggle="modal" data-target="#exampleModal" @click="showCreateHabitModal">+</button>
        <CreateHabit v-show="isCreateHabitModalVisible" @close="closeCreateHabitModal" />
      </div>
    </div>

    <div class="outer-habit-section-box">
      <ol>
        <li v-for="habit in habitList" :key="habit.id">
          <HabitListItem :habitId="habit.id" :habitName="habit.name" :habitDescription="habit.description"/>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/components/habit-list.css';
import CreateHabit from '@/modals/CreateHabit';
import HabitListItem from '@/components/HabitListItem';

export default {
  name: 'HabitList',
  components: {
    CreateHabit,
    HabitListItem
  },
  data() {
    return {
      habitList: [],
      isCreateHabitModalVisible: false
    }
  },
  async mounted() {
    try {
      const response = await this.$http.get('http://localhost:9000/api/habit');
      if (response && response.status === 200) {
        this.habitList = response.data;
      }
    } catch (exception) {
      console.error(exception);
    }
  },
  methods: {
    showCreateHabitModal() {
      this.isCreateHabitModalVisible = true;
    },
    closeCreateHabitModal() {
      this.isCreateHabitModalVisible = false;
    }
  }
}
</script>
