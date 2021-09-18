<template>
  <div class="habit-section">
    <div id="wrapper">
      <div id="left-side-wrapper">
        <h1>Habit</h1>
      </div>
      <div id="right-side-wrapper">
        <button type="button" class="round-btn" @click="showCreateHabitModal">+</button>
        <CreateHabit v-show="isCreateHabitModalVisible" @close="closeCreateHabitModal"></CreateHabit>
      </div>
    </div>

    <div class="outer-habit-section-box"></div>
  </div>
</template>

<script>
import '@/assets/styles/components/habit-list.css';
import CreateHabit from "@/modals/CreateHabit";

export default {
  name: 'HabitList',
  components: {
    CreateHabit
  },
  data() {
    return {
      isCreateHabitModalVisible: false
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
