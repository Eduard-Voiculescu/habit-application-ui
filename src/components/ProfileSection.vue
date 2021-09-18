<template>
  <div class="profile-section">
    <h1>Profile</h1>

    <div class="outer-profile-section-box">
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
import '@/assets/styles/components/profile-section.css';

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
