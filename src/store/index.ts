import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import Member from '../types/Member';
import Role from '../types/Role';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    membersList: [
      {
        id: 1,
        name: "Hiruthik J",
        email: "hiruthik.j@chargebee.com",
        roles: [0,]
      },
    ],
    roles: [
      {
        id: 0,
        title: "Admin",
        description: "Access everything in Chargebee"
      },
      {
        id: 1,
        title: "Tech Support",
        description: 'User can view "Subscriptions" and "Product Catalog" tabs. Can also view, add comments to, send, download individual Invoices/Credit Notes.'
      },
      {
        id: 2,
        title: "Analyst",
        description: 'In addition to Tech Support level access, user will have access to the SaaS metrics report.'
      },
    ]
  },
  mutations: {
    addMember(state, member) {
      state.membersList.push(member)
    },
    updateMember(state, member) {
      for (let i = 0; i < state.membersList.length; i += 1) {
        if (state.membersList[i].id === member.id) {
          state.membersList[i].roles = member.roles;
          break;
        }
      }
    },
    deleteMember(state, id) {
      state.membersList = state.membersList.filter(member => member.id !== id);
    },
  },
  getters: {
    getMembers(state) {
      return state.membersList;
    },
  },
  plugins: [vuexPersist.plugin],
});
