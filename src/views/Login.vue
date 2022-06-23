<template>
  <v-app :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
    <v-card max-width="350px" max-height="350px" class="mx-auto mt-10" shaped>
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
                            @click="dialogLoginCoordenador = true"
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
                            v-model="emailLoginBolsista"
                            label="Email"
                            color="white"
                            dark
                        ></v-text-field>
                        <v-text-field
                            v-model="senhaLoginBolsista"
                            label="Senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="white--text" @click="dialogRegistroBolsista = true, dialogLoginBolsista = false">Registrar</v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="white--text" @click="dialogLoginBolsista = false">Cancelar</v-btn>
                <v-btn outlined color="white" to="/">Entrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRegistroBolsista" max-width="700px" persistent>
        <v-card :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
            <v-card-title class="light-blue darken-2">
                <v-icon large color="white">mdi-account-school-outline</v-icon><span class="ml-2 white--text">Registro do bolsista</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="8" class="mt-3">
                         <v-text-field
                            v-model="nomeRegistroBolsista"
                            label="Nome completo"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" class="mt-3">
                         <v-text-field
                            v-model="idadeRegistroBolsista"
                            label="Idade"
                            color="white"
                            dark
                            
                            counter
                            maxlength="3"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                         <v-text-field
                            label="Email"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="8">
                         <v-text-field
                            label="Endereço"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                         <v-text-field
                            label="Telefone"
                            type="number"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                         <v-text-field
                            label="CPF"
                            color="white"
                            dark
                            counter
                            maxlength="11"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                         <v-text-field
                            label="Matrícula"
                            color="white"
                            dark
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="senhaRegistroBolsista"
                            label="Senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="confirmarSenhaBolsista"
                            label="Confirme sua senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
                    </v-col>
            </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="white--text" @click="dialogRegistroBolsista = false, dialogLoginBolsista = true">Cancelar</v-btn>
                <v-btn outlined color="white" to="/">Registrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogLoginCoordenador" max-width="700px" persistent>
        <v-card :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
            <v-card-title class="light-blue darken-2">
                <v-icon large color="white">mdi-account-tie</v-icon><span class="ml-2 white--text">Entrar como coordenador</span>
            </v-card-title>
            <v-card-text>
                         <v-text-field
                            v-model="emailLoginCoordenador"
                            label="Email"
                            color="white"
                            dark
                        ></v-text-field>
                        <v-text-field
                            v-model="senhaLoginCoordenador"
                            label="Senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="white--text" @click="dialogRegistroCoordenador = true, dialogLoginCoordenador = false">Registrar</v-btn>
                <v-spacer></v-spacer>
                <v-btn text class="white--text" @click="dialogLoginCoordenador = false">Cancelar</v-btn>
                <v-btn outlined color="white" to="/">Entrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialogRegistroCoordenador" max-width="700px" persistent>
        <v-card :style="{'background-image':'url(https://images7.alphacoders.com/809/809458.jpg)'}">
            <v-card-title class="light-blue darken-2">
                <v-icon large color="white">mdi-account-tie</v-icon><span class="ml-2 white--text">Registro do coordenador</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="8" class="mt-3">
                         <v-text-field
                            v-model="nomeRegistroCoordenador"
                            label="Nome completo"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" class="mt-3">
                         <v-text-field
                            v-model="idadeRegistroCoordenadorq"
                            label="Idade"
                            color="white"
                            dark
                            
                            counter
                            maxlength="3"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12">
                         <v-text-field
                            label="Email"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="8">
                         <v-text-field
                            label="Endereço"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                         <v-text-field
                            label="Telefone"
                            type="number"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                         <v-text-field
                            label="CPF"
                            color="white"
                            dark
                            counter
                            maxlength="11"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                         <v-text-field
                            label="SIAPE"
                            color="white"
                            dark
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="senhaRegistroCoordenador"
                            label="Senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="confirmarSenhaCoordenador"
                            label="Confirme sua senha"
                            color="white"
                            dark
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="show = !show"
                        ></v-text-field>
                    </v-col>
            </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text class="white--text" @click="dialogRegistroCoordenador = false, dialogLoginCoordenador = true">Cancelar</v-btn>
                <v-btn outlined color="white" to="/">Registrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        show: false,
        dialogLoginBolsista: false,
        dialogRegistroBolsista: false,
        dialogLoginCoordenador: false,
        dialogRegistroCoordenador: false,
        login1: true,
        login2: false,
      }
    },
}
</script>

<style>
</style> 
