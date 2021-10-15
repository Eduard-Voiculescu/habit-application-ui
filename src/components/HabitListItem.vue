<template>
  <div>
    <form id="habitList-form">
      <div class="container container-habit-list-item">
        <div class="row row-habit-list-item">
          <div class="col-3">
            <input type="radio" @change="completeHabit" />
          </div>
          <div class="col-6" @click="callAppEventToShowDetailsOnHabit">
            <p>{{habitName}}</p>
          </div>
          <div class="col-3">
            <DeleteIcon @click="showDeleteHabitModal" />
            <DeleteHabit
                v-show="isDeleteHabitModalVisible"
                :habitId="habitId"
                @close="closeDeleteHabitModal"
                @deleteHabitItemFromHtml="deleteHabitItemFromHtml"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import DeleteHabit from "@/modals/DeleteHabit";
import Habit from "../models/Habit";

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
    deleteHabitItemFromHtml() {
      this.$emit('isHabitItemAvailable', true, this.$props.habitId);
      this.$emit('deleteEventToDeleteDetailsOnHabit');
    },
    callAppEventToShowDetailsOnHabit() {
      this.$emit('callAppEventToShowDetailsOnHabit',
          new Habit(this.$props.habitId, this.$props.habitName, this.$props.habitDescription));
    },
    async completeHabit() {
      try {
        const response = await this.$http.post(
            `http://localhost:9000/api/habit/complete?habitId=${this.$props.habitId}`
        );

        if (response && response.status === 200) {
          this.$toasted.success(`Habit [${this.habitName}] has been successfully completed.`).goAway(3000);
          this.$emit('isHabitItemAvailable', true, this.$props.habitId);
          this.$emit('deleteEventToDeleteDetailsOnHabit');
        } else {
          this.$toasted.error(`Habit [${this.habitName}] could not be completed.`).goAway(3000);
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