<script src="../models/Habit.js"></script>
<template>
  <div class="habit-section">
    <div id="wrapper">
      <div id="left-side-wrapper">
        <h1>Habit</h1>
      </div>
      <div id="right-side-wrapper">
        <button type="button" class="round-btn" data-toggle="modal" data-target="#exampleModal" @click="showCreateHabitModal">+</button>
        <CreateHabit
            v-show="isCreateHabitModalVisible"
            @close="closeCreateHabitModal"
            @habitCreated="habitCreated"
        />
      </div>
    </div>

    <div class="outer-habit-section-box">
      <ol class="ordered-habit-list">
        <li class="ordered-habit-list-item" v-for="habit in habitList" :key="habit.id">
          <HabitListItem
              :habitId="habit.id"
              :habitName="habit.name"
              :habitDescription="habit.description"
              @isHabitItemAvailable="isHabitItemAvailable"
              @callAppEventToShowDetailsOnHabit="callAppEventToShowDetailsOnHabit"
              @deleteEventToDeleteDetailsOnHabit="deleteEventToDeleteDetailsOnHabit"
          />
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
  async created() {
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
    },
    isHabitItemAvailable(isHabitItemDeleted, habitId) {
      if (isHabitItemDeleted) {
        for (let i = 0; i < this.habitList.length; i++) {
          if (this.habitList[i].id === habitId) {
            this.habitList.splice(i, 1);
            i--;
            break;
          }
        }
      }
    },
    habitCreated(habit) {
      this.habitList.push(habit);
    },
    callAppEventToShowDetailsOnHabit(habit) {
      this.$emit('callAppEventToShowDetailsOnHabit', habit);
    },
    deleteEventToDeleteDetailsOnHabit() {
      this.$emit('deleteEventToDeleteDetailsOnHabit');
    }
  }
}
</script>
