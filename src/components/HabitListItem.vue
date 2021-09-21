<template>
  <div>
    <form id="habitList-form">
      <div class="container container-habit-list-item">
        <div class="row row-habit-list-item">
          <div class="col-3">
            <input type="radio" @change="checkHabitHasDone" />
          </div>
          <div class="col-6">
            <p>{{habitName}}</p>
          </div>
          <div class="col-3">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';

export default {
  name: "HabitListItem",
  props: ['habitId', 'habitName', 'habitDescription'],
  components: {
    DeleteIcon
  },
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
.container-habit-list-item {
  margin: 0;
  padding: 0;
}

.row-habit-list-item {
  padding-top: 10px;
  margin: 0;
}

</style>