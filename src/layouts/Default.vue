<template>
  <v-app>
    <v-app-bar app class="grey darken-4">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar, showMenu = sidebar" color="light-blue darken-2"><v-icon v-if="showMenu==true">mdi-close</v-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h2 class="font-weight-bold text-h2">
      <span class="white--text">S</span><span class="white--text">CA</span><span class="white--text">B</span> 
      </h2>
      <v-spacer></v-spacer>
      <v-menu transition="slide-y-transition" left>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" color="light-blue darken-2"
            >mdi-account</v-icon
          >
        </template>
        <v-list class="light-blue darken-2">
          <v-list-item class="text-center white--text">
            <v-list-item-title class="text-h5">Perfil</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item class="">
            <v-list-item-title class=""
              ><strong>Email: </strong> aluno312020@gmail.com</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="">
            <v-list-item-title class=""
              ><strong>Matrícula: </strong>23072022</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="text-center" to="/Info">
            <v-list-item-title class=""
              >Configurações</v-list-item-title
            >
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="text-center" to="/login">
            <v-list-item-title class="error--text"
              >Sair</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>  
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
        { title: "Projetos", icon: "mdi-folder-text-outline", to: "/Projetos" },
      ],
    };
  },
}
</script>
<style>
</style>

