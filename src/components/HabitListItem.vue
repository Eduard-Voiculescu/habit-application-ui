<template>
  <div>
    <form id="habitList-form">
      <input type="radio" @change="checkHabitHasDone" />
      <p>{{habitName}}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "HabitListItem",
  props: ['habitId', 'habitName', 'habitDescription'],
  data() {
    return {
      habitDone: false
    }
  },
  methods : {
    async checkHabitHasDone() {
      try {
        const response = await this.$http.delete(
            `http://localhost:9000/api/habit/delete?habitId=${this.$props.habitId}`
        );

        if (!response || response.status !== 200) {
          console.log(response);
        }
      } catch (exception) {
        console.error(exception);
      }
    }
  }
}
</script>

<style scoped>

</style>