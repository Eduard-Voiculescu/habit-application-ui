<template>
  <div id="app">
    <div class="w-100">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
