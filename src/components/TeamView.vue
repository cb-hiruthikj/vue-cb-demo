<template>
  <div class="container">
    <header class="section is-medium">
      <h1 class="title is-pulled-left has-text-weight-bold">Add Members ({{ memberCount }})</h1>
      <button
        class="button is-link is-pulled-right"
        @click="showAddMember = !showAddMember"
      >
        + Invite Members
      </button>
    </header>

    <AddMember v-show="showAddMember" @closeAddMember="showAddMember = false" />

    <TeamList>
      <TeamMember
        v-for="member in membersList"
        :key="member.id"
        :memberObj="member"

      />
    </TeamList>
  </div>
</template>

<script>
import TeamMember from "./TeamMember.vue";
import AddMember from "./AddMember.vue";
import RoleList from "./RoleList.vue";
import RoleView from "./RoleView.vue";
import TeamList from "./TeamList.vue";

export default {
  name: "TeamView",
  components: {
    TeamMember,
    AddMember,
    RoleList,
    RoleView,
    TeamList,
  },
  data() {
    return {
      showAddMember: false,
    };
  },
  computed: {
    membersList() {
      return this.$store.state.membersList;
    },
    memberCount() {
      return this.membersList.length;
    }
  },
};
</script>
