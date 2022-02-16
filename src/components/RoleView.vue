<template>
  <label class="checkbox m-2">
    <input
      type="checkbox"
      :value="isChecked"
      @change="$emit('toggleCheck', data_id)"
    />

    <strong> {{ title }} </strong> <br />
    <p class="is-1">{{ description }}</p>
  </label>
</template>

<script>
export default {
  name: "RoleView",
  props: {
    title: { required: true },
    description: { default: "" },
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
