<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeUpdateMember')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Change role for {{ email }}</p>
        <button
          class="delete"
          type="button"
          aria-label="close"
          @click="$emit('closeUpdateMember')"
        ></button>
      </header>

      <form id="updateForm" @submit.prevent="callUpdateMember">
        <section class="modal-card-body">
          <RoleList>
            <RoleView
              v-for="role in roles"
              :key="role.id"
              :id="role.id"
              :title="role.title"
              :description="role.description"
              @toggleCheck="toggleRole"
            />
          </RoleList>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success" type="submit">Update</button>
          <button
            class="button"
            type="button"
            @click="$emit('closeUpdateMember')"
          >
            Cancel
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>


<script>
import RoleList from "./RoleList.vue";
import RoleView from "./RoleView.vue";

export default {
  name: "UpdateMember",
  title: "Update Member",
  components: {
    RoleList,
    RoleView,
  },
  props: ["name", "email", "roles", "id"],
  data() {
    return {
      email: "",
      selectedRoles: [false, false, false],
    };
  },
  computed: {
    roles() {
      return this.$store.state.roles;
    },
  },
  methods: {
    callUpdateMember() {
      console.log("Updated Member");
      this.$store.commit("updateMember", {
        id: this.id,
        name: this.email,
        email: this.email,
        roles: [...this.selectedRoles.keys()].filter(
          (i) => this.selectedRoles[i]
        ),
      });
      console.log(
        this.id
      );
      this.$emit("closeUpdateMember");
    },
    toggleRole(id) {
      this.selectedRoles[id] = !this.selectedRoles[id];
      console.log(this.selectedRoles);
    },
  },
};
</script>


