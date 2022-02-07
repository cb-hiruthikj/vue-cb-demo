<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeUpdateMember')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
          <p class="modal-card-title">Change role for {{ email }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('closeUpdateMember')"
        ></button>
      </header>

      <form
        id="updateForm"
        @submit.prevent="updateMember"
      >
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
          <button class="button is-success" type="submit" @click="updateMember">
            Update
          </button>
          <button class="button" type="button" @click="$emit('closeUpdateMember')">
            Cancel
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>


<script>
import { v4 as uuidv4 } from "uuid";
import RoleList from "./RoleList.vue";
import RoleView from "./RoleView.vue";

export default {
  name: "UpdateMember",
  title: "Update Member",
  components: {
    RoleList,
    RoleView,
  },
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
    updateMember() {
      console.log("Updated Member");
      this.$store.commit("updateMember", {
        id: uuidv4(),
        name: this.email,
        email: this.email,
        roles: [...this.selectedRoles.keys()].filter(
          (i) => this.selectedRoles[i]
        ),
      });
      this.$emit("closeUpdateMember");
    },
    toggleRole(id) {
      this.selectedRoles[id] = !this.selectedRoles[id];
      console.log(this.selectedRoles);
    },
  },
};
</script>


