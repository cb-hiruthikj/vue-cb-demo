<template>
  <label class="checkbox">
    <div class="is-pulled-left">
      <input type="checkbox" :value="isChecked" @change="$emit('toggleCheck', data_id)" />
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
    key: { required: true },
    id: { required: true },
  },
  data() {
    return {
      data_id: this.id,
      isChecked: false,
    };
  },
};
</script>
