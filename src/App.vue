<template>
  <div id="app">
    <div class="w-75 margin-100">
      <div class="row">
        <div class="col">
          <ProfileSection />
        </div>
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
import ProfileSection from "@/components/ProfileSection";
import HabitList from "@/components/HabitList";
import DescriptionHabit from "@/components/DescriptionHabit";

export default {
  name: 'App',
  components: {
    ProfileSection,
    HabitList,
    DescriptionHabit
  }
}
</script>
