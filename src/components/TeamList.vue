<template>
  <div class="columns is-centered is-mobile">
    <ul class="list column is-8">
      <li class="list-item">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import TeamMember from "./TeamMember.vue";

export default {
  name: "TeamList",
}
</script>
