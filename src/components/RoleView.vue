<template>
  <label class="checkbox">
    <div class="is-pulled-left">
      <input type="checkbox" v-model="isSelected" />
    </div>
    <div class="is-pulled-right member-role">
      <strong> {{ title }} </strong> <br />
      <p class="is-1">{{ description }}</p>
    </div>
  </label>
</template>

<script>
export default {
  name: "RoleView",
  props: {
    title: { required: true },
    description: { default: "" },
  },
  data() {
    return {
      isSelected: { default: false },
    };
  },
};
</script>
