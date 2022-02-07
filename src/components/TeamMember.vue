<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ name }}</strong>
          <small><RoleTag v-if="role" :role="role" /></small>
          <br />
          {{ email }}
        </p>
      </div>
    </div>
    <div class="media-right">
      <ManageMember />
    </div>
  </article>
</template>


<script>
import RoleTag from "./RoleTag.vue";
import ManageMember from "./ManageMember.vue";

export default {
  name: "TeamMember",
  props: {
    name: { required: true },
    email: { required: true },
    role: { default: "" },
  },
  components: {
    RoleTag,
    ManageMember,
  },
  methods: {},
};
</script>


<style scoped>
article {
  padding: 1rem;
}
</style>
