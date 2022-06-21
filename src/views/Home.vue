<template>
<<<<<<< HEAD
  <v-app style="background-color:#e5e7e6"> 
    <v-parallax
    dark
    src="https://www.publicidadenaweb.com/wp-content/uploads/2019/08/site-ou-blog.jpg"
  >
  </v-parallax>
  <v-row align="center" justify="center">
    <v-col align="right">
      <v-card max-width="200px" class="pa-5"><v-img src="../assets/iconPC.png" class="ma-2"></v-img></v-card>
    </v-col>
    <v-col align="center">
      <v-card max-width="300px">Opa</v-card>
    </v-col>
    <v-col align="left">
      <v-card max-width="300px">Opa</v-card>
=======
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
            color="blue lighten-3"
          ></v-text-field>
        </v-card-title>
        <v-card-text class=""><v-btn text outlined class="mr-2" @click="dialogConfig = true"><v-icon class="mr-1">mdi-cog</v-icon>Configurar computadores</v-btn><v-btn text outlined>Histórico de usos</v-btn></v-card-text>
        <v-card class="ma-4">
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
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
>>>>>>> 587ef45009b11b517ac963d73495c5dd7588896d
    </v-col>
  </v-row>
  <v-dialog v-model="dialogConfig" max-width="700px">
    <v-card>
      <v-card-title class="blue lighten-3 pa-5">
        <v-icon class="mr-2" color="black">mdi-cog</v-icon>Configurar computadores
        <v-spacer></v-spacer>
        <v-icon @click="dialogConfig = false" color="black" >mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-simple-table
          fixed-header
          height="300px"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left ">
                  <h2>Nome do computador</h2> 
                </th>
                <th class="text-right">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PC 04</td>
                <td class="text-right"><v-icon color="warning">mdi-alert</v-icon><v-icon color="success" class="ml-2">mdi-check</v-icon><v-icon color="error" class="ml-2" @click="test()">mdi-trash-can-outline</v-icon></td>
              </tr>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td class="text-right"><v-icon color="gray" class="ml-2" @click="test()">mdi-wrench-outline</v-icon><v-icon color="error" class="ml-2" @click="test()">mdi-trash-can-outline</v-icon></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <v-card-text class="grey darken-4 text-center pt-4" dark><v-btn @click="dialogCadastroPC = true, dialogConfig = false" class="grey darken-4 white--text" elevation="0"><h2><v-icon large color="white">mdi-plus</v-icon>Cadastrar computador</h2></v-btn></v-card-text>
    </v-card>
  </v-dialog>
  <v-dialog max-width="700px" v-model="dialogCadastroPC">
    <v-card>
      <v-card-title class="white--text grey darken-4">
        <v-icon large color="white" class="mr-2">mdi-plus</v-icon>Cadastrar computadores
      </v-card-title>
      <v-card-text>
        <v-row class="mt-5">
          <v-col cols="12" sm="6"><v-text-field label="Nome do computador" outlined></v-text-field></v-col>
          <v-col cols="12" sm="6"><v-text-field label="N° de ativo" outlined></v-text-field></v-col>
        </v-row>
      </v-card-text>
      <v-card-actions><v-spacer></v-spacer><v-btn @click="dialogConfig = true, dialogCadastroPC = false">Cancelar</v-btn><v-btn class="ml-2" dark>Cadastrar</v-btn></v-card-actions>
    </v-card>
  </v-dialog>
  </v-app>
</template>

<script>
<<<<<<< HEAD
  export default {
    data () {
      return {
      }
    },
=======
export default {
  data(){
    return{
      dialogConfig: false,
      dialogCadastroPC: false,
      pc:[
        {nome: "PC 01", nomeuser:"Felipe Mendes", hre:"18:30", hrs:"19:30", status:"Indisponível", color:'error', projeto:"Hackaton"},
        {nome: "PC 02", nomeuser:"Nenhum", hre:"Livre", hrs:"Livre", status:"Disponível", color:'success', projeto:"Nenhum"},
        {nome: "PC 03", nomeuser:"*", hre:"*", hrs:"*", status:"Manutenção", color:'warning', projeto:"*"}
      ],
desserts: [
          {
            name: 'PC 01',
            
          },
          {
            name: 'PC 02',
 
          },
          {
            name: 'PC 03',
            
          },
          {
            name: 'PC 05',
          
          },
          {
            name: 'PC 06',
            
          },
          {
            name: 'PC 07',
            
          },
          {
            name: 'PC 08',
            
          },
          {
            name: 'PC 09',
            
          },
          {
            name: 'PC 10',
            
          },
        ],
    }
>>>>>>> 587ef45009b11b517ac963d73495c5dd7588896d
  }
</script>

<style>
</style>
