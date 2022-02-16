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
          <strong>{{ memberObj.name }}</strong>
          <small>
            <RoleTag v-for="role in memberObj.roles" :key="role" :roleId="role" />
          </small>
          <br />
          {{ memberObj.email }}
        </p>
      </div>
    </div>
    <div class="media-right">
      <ManageMember :memberObj="memberObj" />
    </div>
  </article>
</template>


<script>
import RoleTag from "./RoleTag.vue";
import ManageMember from "./ManageMember.vue";

export default {
  name: "TeamMember",
  props: {
    memberObj: { required: true },
  },
  components: {
    RoleTag,
    ManageMember,
  },
};
</script>


