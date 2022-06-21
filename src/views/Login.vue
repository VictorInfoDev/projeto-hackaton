<template>
  <v-app :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
    <v-card max-width="350px" max-height="350px" class="mx-auto mt-10" tile>
        <v-img src="../assets/logoSCAB.png" height="350" width="350"></v-img>
    </v-card>
    <v-container fluid text-center >
        <v-container>
            <div>
            <div class="ma-10 white--text"><h1>Escolha seu tipo de usuário para entrar</h1></div>
            <v-row>
                <v-col align="right" class="mr-10">
                    <v-card max-width="180px" class="text-center white--text" color="transparent" elevation=0><h2>Bolsista</h2></v-card>
                    <v-hover v-slot="{ hover }"> 
                        <v-card color="transparent" max-width="180px" class="pa-5"
                            :elevation="hover ? 12 : 5"
                            :class="{ 'on-hover': hover }"
                            @click="dialogLoginBolsista = true"       
                        >
                            <v-img src="../assets/iconAluno.png" height="180" width="180"></v-img>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col align="left" class="ml-10">
                    <v-card max-width="180px" class="text-center white--text" color="transparent" elevation=0><h2>Coordenador</h2></v-card>
                    <v-hover v-slot="{ hover }">
                        <v-card color="transparent" max-width="180px" class="pr-2"
                            :elevation="hover ? 12 : 5"
                            :class="{ 'on-hover': hover }"
                            @click="test()"
                        >
                            <v-img src="../assets/iconProfessor.png" height="220" width="200"></v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            </div>
        </v-container>
    </v-container>
    <v-dialog v-model="dialogLoginBolsista" max-width="700px" persistent>
        <v-card :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
            <v-card-title class="light-blue darken-2">
                <v-icon large color="white">mdi-account-school-outline</v-icon><span class="ml-2 white--text">Entrar como bolsista</span>
            </v-card-title>
            <v-card-text>
                         <v-text-field
                            label="Email"
                            color="white"
                            dark
                        ></v-text-field>
                        <v-text-field
                            label="Senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="white--text" @click="dialogRegistroBolsista = true">Registrar</v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="white--text" @click="dialogLoginBolsista = false">Cancelar</v-btn>
                <v-btn outlined color="white" to="/">Entrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog account-tie></v-dialog>
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        show: false,
        dialogLoginBolsista: false,
        login1: true,
        login2: false,
      }
    },
}
</script>

<style>
</style> 
