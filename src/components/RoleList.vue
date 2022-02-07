<template>
  <div class="field">
    <label class="label">Select user access level</label>

    <aside class="menu">
      <ul class="menu-list">
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
}
</script>
