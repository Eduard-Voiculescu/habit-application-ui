<template>
  <div id="app">
    <div class="w-75 margin-100">
      <div class="row">
        <div class="col">
          <HabitList />
        </div>
        <div class="col-8">
          <DescriptionHabit />
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
  }
}
</script>
