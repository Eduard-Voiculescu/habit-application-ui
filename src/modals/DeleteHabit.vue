<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            Delete habit
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
            Are you sure you want to delete habit?
          </slot>
        </section>

        <footer class="modal-footer">
          <button type="button" class="btn-go-back btn-gray" @click="close">Go back</button>
          <button type="button" class="btn-yes btn-blue" @click="deleteHabit">Yes</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DeleteHabit',
  props: ['habitId'],
  methods: {
    close() {
      this.$emit('close');
    },
    async deleteHabit() {
      if (!this.$props.habitId || this.$props.habitId === "") {
        this.$toasted.error('Habit id is empty').goAway(1500);
        return;
      }

      try {
        const response = await this.$http.delete(`http://localhost:9000/api/habit/delete?habitId=${this.$props.habitId}`)

        if (response && response.status === 200) {
          this.$toasted.success(`Habit [${this.$props.habitId}] has been successfully deleted.`).goAway(3000);
          this.$emit('deleteHabitItemFromHtml');
          this.$emit('close');
        } else {
          console.log(response);
        }
      } catch (exception) {
        console.error(exception);
      }
    }
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.modal-header, .modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: blue;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-footer {
  margin: 0 auto;
}

.btn-gray {
  color: white;
  background: gray;
  border: 1px solid gray;
  border-radius: 2px;
}

.btn-blue {
  color: white;
  background: blue;
  border: 1px solid blue;
  border-radius: 2px;
}

.btn-go-back, .btn-yes {
  display: inline-block;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>
