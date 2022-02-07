<template>
  <span class="tag is-link">{{role}}</span>
</template>

<script>
export default {
  name: "RoleTag",
  props: {
    role: { required: true },
  }
}
</script>
