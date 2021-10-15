<template>
  <div id="app">
    <div class="w-75 margin-100">
      <div class="row">
        <div class="col">
          <HabitList
              @callAppEventToShowDetailsOnHabit="callAppEventToShowDetailsOnHabit"
              @deleteEventToDeleteDetailsOnHabit="deleteEventToDeleteDetailsOnHabit"/>
        </div>
        <div class="col-8">
          <DescriptionHabit
            :habitId="selectedHabitId"
            :habitName="selectedHabitName"
            :habitDescription="selectedHabitDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/app.css';
import HabitList from "@/components/HabitList";
import DescriptionHabit from "@/components/DescriptionHabit";

export default {
  name: 'App',
  components: {
    HabitList,
    DescriptionHabit
  },
  data() {
    return {
      selectedHabitId: null,
      selectedHabitName: null,
      selectedHabitDescription: null
    }
  },
  methods: {
    callAppEventToShowDetailsOnHabit(habit) {
      this.selectedHabitId = habit.id;
      this.selectedHabitName = habit.name;
      this.selectedHabitDescription = habit.description;
    },
    deleteEventToDeleteDetailsOnHabit() {
      this.selectedHabitId = null;
      this.selectedHabitName = null;
      this.selectedHabitDescription = null;
    }
  }
}
</script>
