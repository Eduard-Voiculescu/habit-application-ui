<template>
  <div class="profile-section">
    <h1>Profile</h1>

    <div>
      <div>
        <button type="button" class="btn" @click="showEditProfileModal">Edit profile</button>
        <EditProfile v-show="isEditProfileModalVisible" @close="closeEditProfileModal"/>
      </div>
      <div class="sign-out">
        <button type="button" class="btn" @click="showSignOutModal">Sign out</button>
        <SignOut v-show="isSignOutModalVisible" @close="closeSignOutModal"/>
      </div>
    </div>
  </div>
</template>

<script>
import SignOut from "@/modals/SignOut";
import EditProfile from "@/modals/EditProfile";

export default {
  name: 'ProfileSection',
  components: {
    SignOut,
    EditProfile
  },
  data() {
    return {
      isSignOutModalVisible: false,
      isEditProfileModalVisible: false,
    };
  },
  methods: {
    showSignOutModal() {
      this.isSignOutModalVisible = true;
    },
    closeSignOutModal() {
      this.isSignOutModalVisible = false;
    },
    showEditProfileModal() {
      this.isEditProfileModalVisible = true;
    },
    closeEditProfileModal() {
      this.isEditProfileModalVisible = false;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.profile-section {
  height: 600px;
  width: auto;
  position: relative
}

.sign-out {
  position: absolute;
  bottom: 0;
  left: 25%;
}
</style>
