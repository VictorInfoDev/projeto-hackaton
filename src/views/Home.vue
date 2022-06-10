<template>
  <v-app>
 <div class="ml-10 mt-10"><h1>Computadores</h1></div>
  <v-card class="ma-10" outlined>
        <v-card-title class="">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Procurar computador"
            single-line
            hide-details
            color="success"
          ></v-text-field>
        </v-card-title>
        <v-card-text class=""><v-btn text outlined class="mr-2"><v-icon class="mr-1">mdi-cog</v-icon>Configurar computadores</v-btn><v-btn text outlined>Histórico de usos</v-btn></v-card-text>
  </v-card>
  <div class="ml-10"><h1>Status</h1></div>
  <v-row>
    <v-col cols="12" sm="3" v-for="item_pc in pc" :key="item_pc.id">
    <v-hover v-slot="{ hover }">
      <v-card height="" width="" class="ma-10 mt-5"
      :elevation="hover ? 12 : 5"
      :class="{ 'on-hover': hover }"
      @click="opa()"
      >
      <v-card-text class="grey lighten-1 ">
        <v-row>
          <v-icon  class="ml-2" :color="item_pc.color">mdi-brightness-1</v-icon>
          <v-col :color="item_pc.color">
            <span color="red"><h2>{{  item_pc.status  }}</h2></span>
          </v-col>
        </v-row>
      </v-card-text>
      <div align="center"><v-img src="../assets/iconPC.png" height="170" width="185" class="ma-2"></v-img></div>
      <v-card-text>
        <h1>{{  item_pc.nome  }}</h1><br>
        <b>Usuário: </b>{{  item_pc.nomeuser  }}<br>
        <b>Projeto:</b> {{  item_pc.projeto  }} <br>
        <b>Hora/entrada: </b>{{  item_pc.hre  }}<br>
        <b>Hora/saída: </b>{{  item_pc.hrs  }} 
      </v-card-text>
      <v-card-text class="grey darken-3 text-center white--text"><h3>Ocupar</h3></v-card-text>
      </v-card>
    </v-hover>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      pc:[
        {nome: "PC 01", nomeuser:"Felipe Mendes", hre:"18:30", hrs:"19:30", status:"Indisponível", color:'error', projeto:"Hackaton"},
        {nome: "PC 02", nomeuser:"Nenhum", hre:"Livre", hrs:"Livre", status:"Disponível", color:'success', projeto:"Nenhum"},
        {nome: "PC 03", nomeuser:"*", hre:"*", hrs:"*", status:"Manutenção", color:'warning', projeto:"*"}
      ]
    }
  }
}
</script>

<style>

</style>