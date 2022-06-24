<template>
  <v-app>
            <v-card outlined class="ma-10" dark>
                <v-row>
                    <v-col cols="12" sm="2" align="center">
                        <v-card elevation="0" class="ma-10"><v-img src="../assets/iconAluno.png" height="180" width="180"></v-img></v-card>
                    </v-col>
                    <v-divider vertical class="mt-5 mb-5"></v-divider>
                    <v-col cols="12" sm="2">
                        <v-card elevation="0" class="ma-5">
                            <v-card-title class="text-h5">Felipe de Luca</v-card-title>
                            <v-card-text>
                                  <strong>Matrícula:</strong> 220720222 <br>
                                  <strong>Email:</strong> aluno8071@gmail.com <br>
                                  <v-btn class="mt-3" outlined @click="perfilInfo = !perfilInfo">Mais informações</v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="3" class="mt-5">
                      <v-alert transition="slide-x-transition" v-model="perfilInfo" class="mb-5">
                          <v-card outlined>
                            <div class="ma-3">
                                <strong>Endereço:</strong> Rua Dona Lucia 283<br>
                                <strong>CPF:</strong> 12345678911<br>
                                <strong>Telefone:</strong> 47 99123-7523<br>
                                <strong>Idade:</strong> 22 anos
                            </div>
                            <v-btn outlined class="ma-3">Editar informações</v-btn>
                          </v-card>
                        </v-alert>
                    </v-col>
                    <v-divider vertical class="mt-5 mb-5"></v-divider>
                    <v-col cols="12" sm="4">
                        <v-card elevation="0">
                            <v-card-title>
                                Últimos projetos alocados
                            </v-card-title>
                            <v-card-text>
                                <v-card class="success" to="/Projetos">
                                    <v-card-title class="white--text"
                                    ><h2>Portal do aluno</h2></v-card-title
                                    >
                                </v-card>
                                <v-card class="warning mt-5" to="/Projetos">
                                    <v-card-title class="white--text"
                                    ><h2>Iprev- Instituto de previdência</h2></v-card-title
                                    >
                                </v-card>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider></v-divider>
    <v-card class="text-center mt-10" elevation="0"><span class="text-h3"><strong>Timeline dos projetos</strong> </span></v-card>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="ma-15">
    <v-timeline-item
      color="primary"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="primary">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-folder-text-outline
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">
            Itrans - Instituto de Transporte
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
              Este projeto irá oferecer uma alternativa mais eficiente e rápida...
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">
                
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="warning"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="warning justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">
            Iprev- Instituto de previdência
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-folder-text-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              Este projeto irá oferecer uma alternativa mais eficiente e rápida...
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="success"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="success">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-folder-text-outline
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">
           Portal do aluno
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
            >
              Este projeto irá oferecer uma alternativa mais eficiente e rápida...
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        perfilInfo: false,
      }
    }
}
</script>

<style>

</style>
