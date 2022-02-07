<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeAddMember')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Invite a team member to use ChargeBee</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('closeAddMember')"
        ></button>
      </header>

      <form id="addForm" @submit.prevent="addMember">
        <section class="modal-card-body">
          <p>
            You can either let your team members access everything in this site,
            or assign specific roles to them.
          </p>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="example@chargebee.com"
                required
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

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
          <button class="button is-success" type="submit" @click="addMember">
            Invite
          </button>
          <button class="button" type="button" @click="$emit('closeAddMember')">
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
  name: "AddMember",
  title: "Add Member",
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
    addMember() {
      console.log("Added Member");
      this.$store.commit("addMember", {
        id: uuidv4(),
        name: this.email,
        email: this.email,
        roles: [...this.selectedRoles.keys()].filter((i) => this.selectedRoles[i]),
      });
      this.$emit("closeAddMember");
    },
    toggleRole(id) {
      this.selectedRoles[id] = !this.selectedRoles[id];
      console.log(this.selectedRoles);
    },
  },
};
</script>


