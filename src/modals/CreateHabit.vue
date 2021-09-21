<template>
  <div>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            Create habit
          </slot>
        </header>

        <section class="modal-body">
          <form id="createHabit-form">
            <div>
              <p class="habit-name">Habit name:
                <label for="habit-name" class="habit-name"></label>
                <input
                    type="text"
                    id="habit-name"
                    name="habit-name"
                    placeholder="Habit name"
                    required
                    v-model="habitName">
              </p>
            </div>

            <br/><br/><br/>

            <div>
              <p class="habit-description">Description:
                <br />
                <label for="habit-description"></label>
                <textarea
                    type="text"
                    id="habit-description"
                    name="habit-description"
                    rows="3"
                    cols="50"
                    v-model="description"/>
              </p>
            </div>
          </form>
        </section>

        <footer class="modal-footer">
          <button type="submit" class="btn-yes btn-blue" @click="createHabit">Create</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Habit from "@/models/Habit";

export default {
  name: 'CreateHabit',
  data() {
    return {
      habitName: '',
      description: ''
    }
  },
  methods: {
    async createHabit() {
      if (!this.habitName || this.habitName === "") {
        this.$toasted.error('Habit name can\'t be empty.').goAway(1500);
        return;
      }

      try {
        const response = await this.$http.post(
            "http://localhost:9000/api/habit/create",
            new Habit(
                null,
                this.habitName,
                this.description
            )
        )

        if (response && response.status === 200) {
          this.$toasted.success(`Habit ${this.habitName} has been successfully created.`).goAway(1500);
          this.habitName = null;
          this.description = null;
          this.$emit('close');
        } else {
          console.log(response);
        }
      } catch (exception) {
        console.error(exception);
      }
    },
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
  z-index: 999999;
  overflow: visible;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 600px;
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

.habit-name {
  text-align: left;
  padding-left: 10px;
}

.habit-description {
  text-align: left;
  padding-left: 10px;
}
</style>
