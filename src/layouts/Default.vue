<template>
  <v-app>
    <v-app-bar app class="grey darken-4">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar" color="success"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h2 class="font-weight-bold text-h2">
      <span class="error--text">S</span><span class="success--text">CA</span><span class="white--text">B</span> 
      </h2>
      <v-spacer></v-spacer>
      <v-icon color="success">mdi-account</v-icon>
    </v-app-bar>


      <v-navigation-drawer app v-model="sidebar" class="grey darken-4" dark>
      <v-list>
        <v-list-item>
          <v-icon color="success">mdi-collage</v-icon>
          <v-list-item-title>
            <h2 class="success--text">Painéis</h2>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon class="dark">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
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
      sidebar: true,
      mini: false,
      items: [
        { title: "Home", icon: "mdi-home",},
        { title: "Computadores", icon: "mdi-monitor",},
        { title: "Sair", icon: "mdi-exit-to-app", },
      ],
    };
  },
}
</script>

<style>

</style>