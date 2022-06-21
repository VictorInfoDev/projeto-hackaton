<template>
  <v-app>
    <v-app-bar app class="grey darken-4">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar, showMenu = sidebar" color="light-blue darken-2"><v-icon v-if="showMenu==true">mdi-close</v-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h2 class="font-weight-bold text-h2">
      <span class="white--text">S</span><span class="white--text">CA</span><span class="white--text">B</span> 
      </h2>
      <v-spacer></v-spacer>
      <v-icon color="light-blue darken-2">mdi-account</v-icon>
    </v-app-bar>

      <v-navigation-drawer app v-model="sidebar" :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}" dark>
      <v-list>
        <v-list-item>
          <v-icon color="white">mdi-collage</v-icon>
          <v-list-item-title>
            <h2 class="white--text">Menu</h2>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item to="/Login">
        <v-list-item-icon>
          <v-icon color="error">mdi-exit-to-app</v-icon>
        </v-list-item-icon>
        <v-list-item-content class="white--text">Sair</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main> 
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
      sidebar: false,
      mini: false,
      items: [
        { title: "Home", icon: "mdi-home",to: "/" },
        { title: "Computadores", icon: "mdi-monitor",to: "/Computadores" },
      ],
    };
  },
}
</script>
<style>
</style>
