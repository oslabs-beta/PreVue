<template>
  <v-btn id="logout-btn" @click="logout">
    <br />
    <span class="white--text">Logout</span>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex';
import icons from '../store/state/icons';
import htmlElementMap from '../store/state/htmlElementMap';

export default {
  name: 'LogOutComponent',
  methods: {
    ...mapActions(['replaceState']),
    async logout() {
      // sends request to server and performs logic to ensure that session is invalidated
      const res = await fetch('/users/logout', {
        method: 'GET',
        credentials: 'include'
        // headers: { 'Access-Control-Allow-Origin': ['localhost:8080'] }
      });
      // once session in successfully invalidated user is redirected to splash page
      if (res.status) {
        {
          const state = {
            icons,
            htmlElementMap,
            componentMap: {
              App: {
                componentName: 'App',
                children: ['HomeView'],
                htmlList: []
              },
              HomeView: {
                componentName: 'HomeView',
                children: [],
                htmlList: []
              }
            },
            routes: {
              HomeView: []
            },

            componentNameInputValue: '',
            activeRoute: 'HomeView',
            activeComponent: '',
            selectedElementList: [],
            projectName: 'Untitled-1',
            componentChildrenMultiselectValue: [],
            modalOpen: false,
            htmlElements: [],
            saved: false,
            loggedIn: false,
            rerenderKey: 0
          };
          this.replaceState(state);
        }
        this.$router.push('/');
      }
    }
  }
};
</script>

<style scoped>
#logout-btn {
  font-weight: 700;
  font-size: 14px;
}

.white--text {
  font-size: 14px;
}
</style>
