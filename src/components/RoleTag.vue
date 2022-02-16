<template>
  <span class="tag is-link is-light mx-1">{{ roleTitle }}</span>
</template>

<script>
export default {
  name: "RoleTag",
  props: {
    roleId: { required: true },
  },
  computed: {
    roleTitle() {
      return this.$store.state.roles.find(role => role.id === this.roleId).title;
    },
  },
};
</script>

