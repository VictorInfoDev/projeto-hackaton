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
            color="light-blue darken-2"
          ></v-text-field>
        </v-card-title>
        <v-card-text class=""><v-btn text outlined class="mr-2" @click="dialogConfig = true"><v-icon class="mr-1">mdi-cog</v-icon>Configurar computadores</v-btn><v-btn text outlined @click="dialogHistorico = true">Histórico de usos</v-btn></v-card-text>

  </v-card>
  <div class="ml-10"><h1>Status</h1></div>
  <v-row>
    <v-col cols="12" sm="3" v-for="item_pc in pc" :key="item_pc.id">
    <v-hover v-slot="{ hover }">
      <v-card height="" width="" class="ma-10 mt-5"
      :elevation="hover ? 12 : 5"
      :class="{ 'on-hover': hover }"
      @click="dialogOcuparComputador = true"
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
        <h1><span class="info--text">{{  item_pc.nome  }}</span>/ <span class="">{{  item_pc.ilha  }}</span></h1><br>
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
  <v-dialog v-model="dialogConfig" max-width="700px">
    <v-card>
      <v-card-title class="light-blue darken-2 pa-5">
        <v-icon class="mr-2" color="white">mdi-cog</v-icon><span class="white--text">Configurar computadores</span> 
        <v-spacer></v-spacer>
        <v-icon @click="dialogConfig = false" color="white" >mdi-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-simple-table
          fixed-header
          height="500px"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left ">
                  <h2>Nome do computador</h2> 
                </th>
                <th class="text-left ">
                  N° de ativo
                </th>
                <th class="text-right">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PC 04</td>
                <td>122250809467</td>
                <td class="text-right"><v-icon color="warning">mdi-alert</v-icon><v-icon color="success" class="ml-2">mdi-check</v-icon><v-icon color="error" class="ml-2" @click="test()">mdi-trash-can-outline</v-icon></td>
              </tr>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{  item.ativo }}</td>
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
        <v-icon large color="white" class="mr-2">mdi-plus</v-icon>Cadastrar computador
      </v-card-title>
      <v-card-text>
        <v-row class="mt-1">
          <v-col cols="12" sm="12"><v-text-field label="Nome do computador" ></v-text-field></v-col>
          <v-col cols="12" sm="6"><v-text-field label="N° de ativo" ></v-text-field></v-col>
          <v-col cols="12" sm="6"><v-text-field label="Ilha" ></v-text-field></v-col>
        </v-row>
      </v-card-text>
      <v-card-actions><v-spacer></v-spacer><v-btn @click="dialogConfig = true, dialogCadastroPC = false">Cancelar</v-btn><v-btn class="ml-2" dark>Cadastrar</v-btn></v-card-actions>
    </v-card>
  </v-dialog>
    <v-dialog max-width="900px" v-model="dialogHistorico">
      <v-card>
      <v-card-title class="light-blue darken-2 pa-5">
        <v-icon class="mr-2" color="white">mdi-clipboard-text-clock</v-icon><span class="white--text">Histórico de usos</span> 
        <v-spacer></v-spacer>
        <v-icon @click="dialogHistorico = false" color="white" >mdi-close</v-icon>
      </v-card-title>
        <v-card-title>
          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Procurar"
                single-line
                hide-details
                color="gray"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      color="success"
                      v-model="date"
                      label="Procurar por data"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color=""
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="success"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="12" sm="4">
              <v-combobox
              label="Procurar por projeto"
              :items="items"
              >

              </v-combobox>
            </v-col>
          </v-row>
        </v-card-title>
        <v-simple-table
          fixed-header
          height="500px"
        >
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left ">
                  <v-chip dark><h3>Nome do computador</h3></v-chip> 
                </th>
                <th class="text-left ">
                  Usuário
                </th>
                <th class="text-left ">
                  Projeto
                </th>
                <th class="text-left ">
                  <v-chip class="primary">Hora/Inicio</v-chip> 
                </th>
                <th class="text-left ">
                  <v-chip class="warning">Hora/Saída</v-chip>
                </th>
                <th class="text-left ">
                  <v-chip class="success">Data</v-chip>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in desserts"
                :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.usuario }}</td>
                <td>{{ item.projeto }}</td>
                <td>{{ item.dtinicio }}</td>
                <td>{{ item.dtfim }}</td>
                <td>{{ item.data }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogOcuparComputador" max-width="700px">
      <v-card>
        <v-card-title class="light-blue darken-2 pa-5">
          <v-icon color="white">mdi-desktop-classic</v-icon><span class="ml-2 white--text">Ocupar computador</span>
          <v-spacer></v-spacer>
          <v-icon @click="dialogOcuparComputador = false" color="white" >mdi-close</v-icon>
        </v-card-title>
        <v-card-text>
            <v-row class="mt-5">
              <v-col cols="12" sm="6" class="text-center">
                <v-card class="pa-1 text-center primary--text" color="transparent" elevation=0><h1>Horário de entrada</h1></v-card>
                <v-time-picker
                  v-model="horaEntrada"
                  :allowed-minutes="allowedStep"
                  class="mt-4"
                  format="24hr"
                ></v-time-picker>
              </v-col>
                <v-divider vertical></v-divider>
              <v-col cols="12" sm="6" class="text-center">
                <v-card class="pa-1 text-center warning--text" color="transparent" elevation=0><h1>Horário de saída</h1></v-card>
                <v-time-picker
                  v-model="horaSaida"
                  :allowed-minutes="allowedStep"
                  class="mt-4"
                  format="24hr"
                  color="warning"
                ></v-time-picker>
              </v-col>
              <v-col class="mt-10">
                <div class="mb-2"><h2>Selecione o projeto</h2></div>
                <v-combobox
                  v-model="selectProjeto"
                  outlined
                  solo
                  :items="items"
                ></v-combobox>
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-text class="grey darken-4 text-center pt-4" dark><v-btn @click="dialogOcuparComputador = false" class="grey darken-4 white--text" elevation="0"><h2>Ocupar</h2></v-btn></v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      items: [
        'Itrans - Instituto de Transporte',
        'Iprev- Instituto de previdência',
        'Portal do aluno',
      ],
      dialogOcuparComputador: false,
      dialogHistorico: false,
      dialogConfig: false,
      dialogCadastroPC: false,
      pc:[
        {nome: "PC 01", nomeuser:"Felipe Mendes", hre:"18:30", hrs:"19:30", status:"Indisponível", color:'error', projeto:"Hackaton", ilha:"Ilha 01"},
        {nome: "PC 02", nomeuser:"Nenhum", hre:"Livre", hrs:"Livre", status:"Disponível", color:'success', projeto:"Nenhum", ilha:"Ilha 02"},
        {nome: "PC 03", nomeuser:"*", hre:"*", hrs:"*", status:"Manutenção", color:'warning', projeto:"*", ilha:"Ilha 03"}
      ],
      desserts: [
          {
            name: 'PC 01',
            usuario:"Felipe Mendes", dtinicio:"18:30", dtfim:"19:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 02',
            usuario:"Julia", dtinicio:"19:30", dtfim:"20:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 03',
            usuario:"Fernando", dtinicio:"17:30", dtfim:"18:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 05',
            usuario:"João", dtinicio:"16:30", dtfim:"17:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 06',
            usuario:"Felipa", dtinicio:"14:30", dtfim:"15:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 07',
            usuario:"Jorge", dtinicio:"13:30", dtfim:"14:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 08',
            usuario:"Maria", dtinicio:"12:30", dtfim:"13:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 09',
            usuario:"Gustavo", dtinicio:"11:30", dtfim:"12:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
          {
            name: 'PC 10',
            usuario:"Matheus", dtinicio:"10:30", dtfim:"11:30", projeto:"Hackaton", data:"01/07/22",ativo:"122250809467"
          },
        ],
    };
  }
}
</script>

<style>
</style> 
