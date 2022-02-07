<template>
  <div>
    <UpdateMember
      v-if="showUpdateModal"
      @closeUpdateMember="showUpdateModal = false"
      :name="name"
      :email="email"
      :roles="roles"
      :id="id"
    />
    <DeleteMember
      @closeDeleteModal="showDeleteModal = false"
      v-if="showDeleteModal"
      :id="id"
      :email="email"
    />
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
          <a
            href="#"
            class="dropdown-item"
            @click="
              showUpdateModal = true;
              dropDownState = !dropDownState;
            "
          >
            Edit Role
          </a>
          <a
            href="#"
            class="dropdown-item is-danger"
            @click="
              showDeleteModal = true;
              dropDownState = !dropDownState;
            "
          >
            Remove
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateMember from "./UpdateMember.vue";
import DeleteMember from "./DeleteMember.vue";

export default {
  name: "ManageMember",
  props: ["name", "email", "roles", "id"],
  components: {
    UpdateMember,
    DeleteMember,
  },
  data() {
    return {
      dropDownState: false,
      showUpdateModal: false,
      showDeleteModal: false,
    };
  },
};
</script>
