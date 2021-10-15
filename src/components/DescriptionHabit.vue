<template>
  <div class="description-section">
    <h1>Description</h1>
    <div class="outer-description-section-box">
      <div class="row">
        <div class="col-md-4" v-show="habitId">
          <p class="detailed-habit-information">Id : {{habitId}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-show="habitName">
          <p class="detailed-habit-information">Name : {{habitName}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-show="habitDescription">
          <p class="detailed-habit-information">Description : {{habitDescription}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/components/description-habit.css';

export default {
  name: 'DescriptionHabit',
  props: ['habitId', 'habitName', 'habitDescription']
}
</script>
