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
            <DeleteIcon @click="showDeleteHabitModal" />
            <DeleteHabit v-show="isDeleteHabitModalVisible" :habitId="habitId" @close="closeDeleteHabitModal" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import DeleteHabit from "@/modals/DeleteHabit";

export default {
  name: "HabitListItem",
  props: ['habitId', 'habitName', 'habitDescription'],
  components: {
    DeleteIcon,
    DeleteHabit
  },
  data() {
    return {
      habitDone: false,
      isDeleteHabitModalVisible: false
    }
  },
  methods : {
    showDeleteHabitModal() {
      this.isDeleteHabitModalVisible = true;
    },
    closeDeleteHabitModal() {
      this.isDeleteHabitModalVisible = false;
    },
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

.deleteHabitModal {

}
</style>