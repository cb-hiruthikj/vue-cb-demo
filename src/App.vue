<template>
  <div id='app'>
      <TeamView />
  </div>
</template>

<script>
import TeamView from './components/TeamView.vue';

export default {
  name: 'App',
  components: {
    TeamView,
  },
  title: "Team Members",
};
</script>
