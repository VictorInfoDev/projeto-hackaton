<template>
  <v-app>
    <div class="ma-10">
      <v-card max-width="100%" elevation="10">
        <v-card-title class="pa-5 white--text">
          <v-icon color="primary">mdi-application-cog-outline</v-icon>
          <span class="primary--text ml-3"
            >Quadro de projetos</span
          >
          <v-spacer></v-spacer>
          <v-btn
          fab
          class="mx-2"
          dark
          large
          color="primary"
          @click="dialogCadastroProjeto = true"
          >
            <v-icon>
                mdi-folder-plus-outline
            </v-icon>
          </v-btn>
          </v-card-title
        >
        <v-divider></v-divider>
        <v-card-text class="pa-10">
        <v-row>
            <v-col cols="12" sm="4">
                <v-card class="primary">
                    <v-card-title
                    ><v-icon @click="dialogInfoProjeto = true" color="white" class="mr-3"    
                    >mdi-menu</v-icon
                    >
                    <span class="white--text">Mais informações</span></v-card-title
                    >
                    <v-card-title class="white--text"
                    ><h2>Itrans - Instituto de Transporte</h2></v-card-title
                    >
                    <v-card-actions>
                    <v-btn
                        color="white"
                        text
                    >
                        Integrantes
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card class="warning">
                    <v-card-title
                    ><v-icon color="white" class="mr-3" @click="test()"
                        >mdi-menu</v-icon
                    >
                    <span class="white--text">Mais informações</span></v-card-title
                    >
                    <v-card-title class="white--text"
                    ><h2>Iprev- Instituto de previdência</h2></v-card-title
                    >
                    <v-card-actions>
                    <v-btn
                        color="white"
                        text
                    >
                        Integrantes
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card class="success">
                    <v-card-title
                    ><v-icon  color="white" class="mr-3" @click="test()"
                        >mdi-menu</v-icon
                    >
                    <span class="white--text">Mais informações</span></v-card-title
                    >
                    <v-card-title class="white--text"
                    ><h2>Portal do aluno</h2></v-card-title
                    >
                    <v-card-actions>
                    <v-btn
                        color="white"
                        text
                        @click="show = !show"
                    >
                        Integrantes
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text class="white">
                            <v-list subheader>
                                <v-list-item
                                    v-for="chat in recent"
                                    :key="chat.title"
                                >
                                    <v-list-item-icon>
                                    <v-icon color="black">
                                        {{ chat.icon }}
                                    </v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                </v-list>
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
        </v-card-text>
      </v-card>
    </div>
    <v-dialog v-model="dialogCadastroProjeto" max-width="700px" persistent>
        <v-card>
            <v-card-title class="light-blue darken-2 pa-5">
                <v-icon color="white">mdi-folder-plus-outline</v-icon><span class="ml-3 white--text">Criar projeto</span>
                <v-spacer></v-spacer>
                <v-icon @click="dialogCadastroProjeto = false" color="white" >mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
                <v-row class="mt-2">
                <div class="ma-3"><h2>Informações</h2></div>
                    <v-col cols="12" sm="12">
                         <v-text-field
                            v-model="tituloProjeto"
                            label="Titilo do projeto"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-textarea
                        filled
                        name="input-7-4"
                        label="Descrição do projeto"
                        ></v-textarea>
                    </v-col>
                <v-col cols="12" sm="6" class="text-center">
                <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        color="primary"
                        v-model="date2"
                        label="Data início"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date2"
                        no-title
                        scrollable
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                        text
                        color=""
                        @click="menu2 = false"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(date2)"
                        >
                        OK
                        </v-btn>
                    </v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" sm="6" class="text-center">
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
                      color="warning"
                      v-model="date"
                      label="Data fim"
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
                      color="warning"
                      @click="$refs.menu.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
                </v-col>
                <v-col cols="12" sm="12"><div><h2>Cor</h2></div></v-col> 
                <v-col cols="12" sm="4"><v-card class="primary text-center pa-10 white--text" @click="opa()"><h2>Azul</h2></v-card></v-col>
                <v-col cols="12" sm="4"><v-card class="success text-center pa-10 white--text" @click="opa()"><h2>Verde</h2></v-card></v-col>
                <v-col cols="12" sm="4"><v-card class="warning text-center pa-10 white--text" @click="opa()"><h2>Laranja</h2></v-card></v-col>
                </v-row>
            </v-card-text>
            <v-card-text class="light-blue darken-2 text-center pt-4" dark><v-btn @click="dialogCadastroProjeto = false" class="light-blue darken-2 white--text" elevation="0"><h2>Criar</h2></v-btn></v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogInfoProjeto" persistent max-width="700px">
        <v-card :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
            <v-card-title class="light-blue darken-2 pa-5">
                <v-icon color="white">mdi-folder-text-outline</v-icon><span class="ml-3 white--text">Informações do projeto</span>
                <v-spacer></v-spacer>
                <v-icon @click="dialogInfoProjeto = false" color="white" >mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
                        <v-card elevation="10" class="mt-5 mb-5">
                            <v-card-text>
                                <span class="ma-2"><h1>Itrans - Instituto de Transporte</h1> </span><br>
                                Este projeto irá oferecer uma alternativa mais eficiente e rápida...
                                <div class="mt-3"><v-icon class="mr-3">mdi-calendar-today</v-icon><span class="primary--text">22/06/2022</span> - <span class="warning--text">22/08/2022</span></div>
                                <v-container class="mt-10">
                                    <v-text-field
                                    v-model="newTask"
                                    label="Defina metas!"
                                    solo
                                    @keydown.enter="create"
                                    >
                                    <template v-slot:append>
                                        <v-fade-transition>
                                        <v-icon
                                            v-if="newTask"
                                            @click="create"
                                        >
                                            mdi-plus-circle
                                        </v-icon>
                                        </v-fade-transition>
                                    </template>
                                    </v-text-field>

                                    <h2 class="text-h4 success--text pl-4">
                                    Metas:&nbsp;
                                    <v-fade-transition leave-absolute>
                                        <span :key="`tasks-${tasks.length}`">
                                        {{ tasks.length }}
                                        </span>
                                    </v-fade-transition>
                                    </h2>

                                    <v-divider class="mt-4"></v-divider>

                                    <v-row
                                    class="my-1"
                                    align="center"
                                    >
                                    <strong class="mx-4 info--text text--darken-2">
                                        Pendentes: {{ remainingTasks }}
                                    </strong>

                                    <v-divider vertical></v-divider>

                                    <strong class="mx-4 success--text text--darken-2">
                                        Feitas: {{ completedTasks }}
                                    </strong>

                                    <v-spacer></v-spacer>

                                    <v-progress-circular
                                        :value="progress"
                                        class="mr-2"
                                    ></v-progress-circular>
                                    </v-row>

                                    <v-divider class="mb-4"></v-divider>

                                    <v-card v-if="tasks.length > 0">
                                    <v-slide-y-transition
                                        class="py-0"
                                        group
                                        tag="v-list"
                                    >
                                        <template v-for="(task, i) in tasks">
                                        <v-divider
                                            v-if="i !== 0"
                                            :key="`${i}-divider`"
                                        ></v-divider>

                                        <v-list-item :key="`${i}-${task.text}`">
                                            <v-list-item-action>
                                            <v-checkbox
                                                v-model="task.done"
                                                :color="task.done && 'grey' || 'primary'"
                                            >
                                                <template v-slot:label>
                                                <div
                                                    :class="task.done && 'grey--text' || 'primary--text'"
                                                    class="ml-4"
                                                    v-text="task.text"
                                                ></div>
                                                </template>
                                            </v-checkbox>
                                            </v-list-item-action>

                                            <v-spacer></v-spacer>

                                            <v-scroll-x-transition>
                                            <v-icon
                                                v-if="task.done"
                                                color="success"
                                            >
                                                mdi-check
                                            </v-icon>
                                            </v-scroll-x-transition>
                                        </v-list-item>
                                        </template>
                                    </v-slide-y-transition>
                                    </v-card>
                                </v-container>
                            </v-card-text>
                        </v-card>
                        <v-card elevation="10" class="mt-5 mb-5">
                            <v-card-title>Coordenador e bolsistas alocados</v-card-title>
                            <v-card-text class="white">
                                <v-list subheader>
                                    <v-list-item>
                                        <v-row>
                                            <v-col cols="12" sm="9">
                                                <v-text-field
                                                    v-model="matriculaAlocada"
                                                    label="Matrícula"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-btn class="success" fab>
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-list-item>
                                    <v-list-item
                                        v-for="chat in recent"
                                        :key="chat.title"
                                    >
                                        <v-list-item-icon>
                                        <v-icon color="black">
                                            {{ chat.icon }}
                                        </v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                        <v-list-item-title v-text="chat.title"></v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon>{{  chat.iconDelete  }}</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                    </v-list>
                            </v-card-text>
                        </v-card>
                        <v-card elevation="10" class="mt-5 mb-5">
                            <v-card-title>Computadores alocados</v-card-title>
                            <v-card-text>
                                        <v-row>
                                            <v-col cols="12" sm="9">
                                                <v-combobox
                                                label="Computadores disponíveis"
                                                :items="items"
                                                >
                                                </v-combobox>   
                                            </v-col>
                                            <v-col cols="12" sm="3">
                                                <v-btn class="success" fab @click="dialogAlocarComputador = true">
                                                    <v-icon>mdi-plus</v-icon>
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                <v-expansion-panels>
                                    <v-expansion-panel
                                        v-for="pc in pcs"
                                        :key="pc.title"
                                    >
                                    <v-expansion-panel-header>
                                         <b>{{  pc.title  }}</b>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <b>Bolsista:</b> {{  pc.nome  }}<br>
                                        <b>Dias da semana: </b> {{  pc.data  }}<br>
                                        <b>Hora/entrada: </b> {{  pc.horaEntrada  }}<br>
                                        <b>Hora/saída:</b> {{  pc.horaSaida  }}
                                        <v-card-text></v-card-text>
                                        <v-card @click="dialogAlocarComputador = true" class="text-center warning white--text pa-3"><h2>Editar</h2></v-card>
                                    </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-card-text>
                        </v-card>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogAlocarComputador" max-width="700px" persistent>
        <v-card>
            <v-card-title class="light-blue darken-2 pa-5">
                <v-icon large color="white">mdi-plus</v-icon><span class="ml-2 white--text">Alocar computador</span>
                <v-spacer></v-spacer>
                <v-icon @click="dialogAlocarComputador = false" color="white" >mdi-close</v-icon>
            </v-card-title>
            <v-card-text>
                <v-row class="mt-2">
                    <v-col>
                        <v-combobox
                            class="mt-3"
                            label="Bolsistas alocados"
                            :items="items2"
                            >
                        </v-combobox>  
                    </v-col>
                    <v-col>
                        <v-combobox
                        v-model="select"
                        :items="items3"
                        label="Dias da semana"
                        multiple
                        chips
                        ></v-combobox>
                    </v-col>

                </v-row>
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
                </v-row>
            </v-card-text>
            <v-card-text class="success text-center pt-4" dark><v-btn @click="dialogAlocarComputador = false" class="success white--text" elevation="0"><h2>Alocar</h2></v-btn></v-card-text>
        </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
    data () {
        return{
            dialogAlocarComputador: false,
            dialogInfoProjeto: false,
            show: false,
            dialogCadastroProjeto: false,
            pcs: [
                {title:"PC 01", nome:"Felipe", data:"seg/ter", horaEntrada:"13:30", horaSaida:"14:30"},
                {title:"PC 02", nome:"Mathus", data:"qua/qui", horaEntrada:"14:30", horaSaida:"15:30"},
                {title:"PC 03", nome:"Mario", data:"sex/seg", horaEntrada:"15:30", horaSaida:"16:30"},
                {title:"PC 04", nome:"Fernanda", data:"ter/qua", horaEntrada:"17:30", horaSaida:"18:30"},
                {title:"PC 05", nome:"Maria", data:"qui/sex", horaEntrada:"19:30", horaSaida:"20:30"},
            ],
            items: [
                'PC 01', 'PC 02', 'PC 03'
            ],
            items2: [
                'Maria', 'José', 'Felipe'
            ],
            items3:[
                'seg', 'ter', 'qua', 'qui', 'sex'
            ],
            recent: [
                {
                icon: 'mdi-account-tie',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Jason Oner',
                },
                {
                icon: 'mdi-account-school-outline',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Mike Carlson',
                iconDelete: 'mdi-close'
                },
                {
                icon: 'mdi-account-school-outline',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Cindy Baker',
                iconDelete: 'mdi-close'
                },
                {
                icon: 'mdi-account-school-outline',
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Ali Connors',
                iconDelete: 'mdi-close'
                },
            ],
            tasks: [
            ],
            newTask: null,
                }
    },
    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.newTask,
        })

        this.newTask = null
      },
    },
};
</script>

<style></style>