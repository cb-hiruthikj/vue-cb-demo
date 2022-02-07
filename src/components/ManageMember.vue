<template>
  <div>
    <div :class="{ dropdown: true, 'is-active': dropDownState }">
      <div class="dropdown-trigger" @click="dropDownState = !dropDownState">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item" @click="showUpdateModal = true">
            Edit Role
          </a>
          <a href="#" class="dropdown-item is-danger"> Remove </a>
        </div>
      </div>
    </div>
    <UpdateMember v-if="showUpdateModal" @closeUpdateMember="showUpdateModal = false"/>
  </div>
</template>

<script>
import UpdateMember from "./UpdateMember.vue";

export default {
  name: "ManageMember",
  components: {
    UpdateMember,
  },
  data() {
    return {
      dropDownState: false,
      showUpdateModal: false,
    };
  },
};
</script>
