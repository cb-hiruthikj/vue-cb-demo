<template>
  <div class="container">
    <div class="section is-medium">
      <h1 class="title is-pulled-left">Add Members (count)</h1>
      <button
        class="button is-link is-pulled-right"
        @click="showAddMember = !showAddMember"
      >
        + Invite Members
      </button>
    </div>

    <AddMember v-show="showAddMember" @closeAddMember="showAddMember = false">
      <RoleList>
        <RoleView title="Admin" description="Access everything in Chargebee" />
        <RoleView
          title="Tech Support"
          description='User can view "Subscriptions" and "Product Catalog" tabs. Can
            also view, add comments to, send, download individual
            Invoices/Credit Notes.'
        />
        <RoleView
          title="Analyst"
          description="In addition to Tech Support level access, user will have
              access to the SaaS metrics report."
        />
      </RoleList>
    </AddMember>

    <div class="columns is-centered is-mobile">
      <ul class="list column is-8">
        <li class="list-item">
          <TeamMember
            name="Hiruthik J"
            email="hiruthik.j@chargebee.com"
            role="Admin"
          />
          <TeamMember
            name="Hiruthik J"
            email="hiruthik.j@chargebee.com"
            role="Admin"
          />
          <TeamMember
            name="Hiruthik J"
            email="hiruthik.j@chargebee.com"
            role="Admin"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import TeamMember from "./TeamMember.vue";
import AddMember from "./AddMember.vue";
import RoleList from "./RoleList.vue";
import RoleView from "./RoleView.vue";

export default {
  name: "TeamView",
  components: {
    TeamMember,
    AddMember,
    RoleList,
    RoleView,
  },
  data() {
    return {
      showAddMember: false,
      members: [],
    };
  },
};
</script>
