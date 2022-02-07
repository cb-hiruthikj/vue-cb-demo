<template>
  <div class="field">
    <label class="label">Select user access level</label>

    <aside class="menu">
      <ul class="menu-list">
        <!-- <li v-for="role in roles" :key="role.title">{{ role }}</li> -->
        <slot></slot>
      </ul>
    </aside>
  </div>
</template>

<script>
import RoleView from "./RoleView.vue";

export default {
  components: {
    RoleView
  },
  data(){
    return {
      roles: []
    }
  },
  created() {
    this.roles = this.$children;
  }
}
</script>
