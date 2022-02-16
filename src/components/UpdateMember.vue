<template>
  <div class="modal is-active" tabindex="-1" @keydown.esc="$emit('closeUpdateMember')">
    <div class="modal-background" @click="$emit('closeUpdateMember')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Change role for {{ memberObj.email }}</p>
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
          <button class="button is-info" type="submit">Update</button>
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
  props: {
    memberObj: { required: true },
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
    callUpdateMember() {
      console.log("Updated Member");
      this.$store.commit("updateMember", {
        id: this.memberObj.id,
        name: this.memberObj.email,
        email: this.memberObj.email,
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


