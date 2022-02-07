<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('closeAddMember')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Invite a team member to use ChargeBee</p>
        <button class="delete" aria-label="close" @click="$emit('closeAddMember')"></button>
      </header>

      <form id="addForm">
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
                v-model="$root.$data.email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

        <slot></slot>
        <!-- {{ roles }} -->

        </section>

        <footer class="modal-card-foot">
          <button class="button is-success" type="submit">Invite</button>
          <button class="button" @click="$emit('closeAddMember')">Cancel</button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import RoleList from "./RoleList.vue";
import RoleView from "./RoleView.vue";

export default {
  name: "AddMember",
  title: "Add Member",
  components: {
    RoleList,
    RoleView,
  },
  created(){
    this.roles = this.$children[0];
  },
};
</script>


<style scoped>
/* .member-role {
    padding-left: 5px;
  } */
</style>
